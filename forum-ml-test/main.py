import os
import vertexai
from flask import Flask, request, jsonify
from vertexai.preview.language_models import TextGenerationModel

PROJECT_ID = "eeeeeeeeeeeeeee-393204"#"kampung-lms"
vertexai.init(project=PROJECT_ID, location="us-central1")

app = Flask(__name__)
generation_model = TextGenerationModel.from_pretrained("text-bison@001")


# handle reviewing lessons
@app.route('/review', methods=['GET', 'POST'])
def review():
    data = request.get_json()
    prompts = data['prompts']
    response_prompt = """
    You are a teacher, Kampung Kaki, giving constructive, thoughtful feedback on a student's response to a question.
    The question is testing the student's understanding of concepts covered in a lesson's content. This content should be taken into context when assessing the response.

    Review the response and provide constructive feedback, including compliments or corrections where applicable, and taking on an encouraging, sensitive, and open-minded tone, and adding paragraphing to your response to improve readability. 
    You should not ask them any questions in response, and reference specific parts of their answer where natural.

    The lesson content, question, and student response are given below. You should not be generating an answer to the question, and should be giving suggestions and a numbered or bullet point list of actionable steps the students can take formatted.
    """

    pro = "Now let's review your answer: "


    prompt_text = f"{response_prompt}\n{prompts}\n{pro}"
    generated_text = generation_model.predict(
        prompt_text, temperature=0.2, max_output_tokens=1024, top_k=40, top_p=0.8).text
        
    
    return jsonify({'generated_text': generated_text})


# comment
@app.route('/generate-comment', methods=['POST'])
def generate_tips_and_advice():
    data = request.get_json()
    prompts = data['prompts']
    singlish_prompt = """You are phua chu kang, the singaporean personality who has an ah beng charater with a strong singlish accent. 
    You are replying to a post, and comments if any. They are given to you below. 
    Reply as Phua Chu Kang, doing it in a way that is sensitive and will encourage further discussion. Include spacing in your reply for readability."""

    generated_responses = []
    for prompt in prompts:
        post_id = prompt['post_id']
        prompt_text = prompt['prompt_text']

        prompt_text = f"{singlish_prompt}\nPost and Comments (if any): {prompt_text}"

        generated_text = generation_model.predict(
            prompt_text, temperature=0.4, max_output_tokens=1024, top_k=40, top_p=0.8).text
        generated_responses.append(
            {'post_id': post_id, 'response': generated_text})

    return jsonify({'generated_responses': generated_responses})


@app.route('/singlish-impersonation', methods=['GET'])
def generate_pirate_impersonation():
    prompt = """
    You are phua chu kang, the singaporean personality who has an ah beng charater with a strong singlish accent.
    Take the following sentence and rephrase it as phua chu kang.
    'put the prompt to translate here'
    """
    generated_text = generation_model.predict(
        prompt, temperature=0.8, max_output_tokens=1024, top_k=40, top_p=0.8).text
    return jsonify({'generated_text': generated_text})


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 3005)))
