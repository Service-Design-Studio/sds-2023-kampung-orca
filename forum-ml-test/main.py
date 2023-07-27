# main.py

from flask import Flask, request, jsonify
from vertexai.preview.language_models import TextGenerationModel

PROJECT_ID = "eeeeeeeeeeeeeee-393204"

app = Flask(__name__)
generation_model = TextGenerationModel.from_pretrained("text-bison@001")


#if we decide to go the posting route
@app.route('/reading-comprehension-questions', methods=['GET'])
def generate_reading_comprehension_questions():
    prompt = """
    Generate 5 questions that test a reader's comprehension of the following text.
    Text: [Provide the text here]
    """
    generated_text = generation_model.predict(prompt, temperature=0.2, max_output_tokens=1024, top_k=40, top_p=0.8).text
    return jsonify({'generated_text': generated_text})

@app.route('/generate-comment', methods=['POST'])
def generate_tips_and_advice():
    data = request.get_json()
    prompts = data['prompts']
    singlish_prompt = "You are phua chu kang, the singaporean personality who has an ah beng charater with a strong singlish accent. You are replying to a post, and comments if any. They are given to you below. Reply asPhua Chu Kang, doing it in a way that is sensitive and will encourage further discussion."
    
    generated_responses = []
    for prompt in prompts:
        post_id = prompt['post_id']  
        prompt_text = prompt['prompt_text']

       
        prompt_text = f"{singlish_prompt}\nPost and Comments (if any): {prompt_text}"

        generated_text = generation_model.predict(prompt_text, temperature=0.2, max_output_tokens=1024, top_k=40, top_p=0.8).text
        generated_responses.append({'post_id': post_id, 'response': generated_text})  

    return jsonify({'generated_responses': generated_responses})


@app.route('/singlish-impersonation', methods=['GET'])
def generate_pirate_impersonation():
    prompt = """You are phua chu kang, the singaporean personality who has an ah beng charater with a strong singlish accent. Take the following sentence and rephrase it as phua chu kang.
    'put the prompt to translate here'
    """
    generated_text = generation_model.predict(prompt, temperature=0.8, max_output_tokens=1024, top_k=40, top_p=0.8).text
    return jsonify({'generated_text': generated_text})

if __name__ == '__main__':
    app.run()
