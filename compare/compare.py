import docx
import os
import streamlit as st
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def extract_text_from_docx(file_path):
    doc = docx.Document(file_path)
    return "\n".join([para.text for para in doc.paragraphs])

def compare_resumes(user_resume_text, sample_resumes_texts):
    vectorizer = TfidfVectorizer().fit_transform([user_resume_text] + sample_resumes_texts)
    similarity_scores = cosine_similarity(vectorizer)[0][1:] * 100
    return max(similarity_scores), similarity_scores

# Load sample resumes from Kaggle dataset
sample_resumes_texts = []
sample_resumes_folder = "sample_resumes"
for file_name in os.listdir(sample_resumes_folder):
    if file_name.endswith(".docx"):
        file_path = os.path.join(sample_resumes_folder, file_name)
        sample_resumes_texts.append(extract_text_from_docx(file_path))

st.title("Resume Comparison Tool")

user_resume_file = st.file_uploader("Upload Your Resume", type=["docx"])

if user_resume_file:
    user_resume_text = extract_text_from_docx(user_resume_file)
    max_score, all_scores = compare_resumes(user_resume_text, sample_resumes_texts)
    st.success(f"Highest Similarity Score: {max_score:.2f}%")
else:
    st.info("Please upload your resume to compare.")
