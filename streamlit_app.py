import streamlit as st
import streamlit.components.v1 as components
import os
import base64

# Streamlit Page Setup - Wide Mode & Full Width
st.set_page_config(
    page_title="SkillSprint — Outcome-Based Learning & Career Portfolio",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS to hide Streamlit UI chroming & maximize viewport for SkillSprint
hide_streamlit_chrome = """
<style>
    /* Hide Streamlit default header, toolbar, hamburger menu & footer */
    #MainMenu {visibility: hidden; display: none !important;}
    footer {visibility: hidden; display: none !important;}
    header {visibility: hidden; display: none !important;}
    [data-testid="stToolbar"] {visibility: hidden; display: none !important;}
    [data-testid="stDecoration"] {visibility: hidden; display: none !important;}
    [data-testid="stStatusWidget"] {visibility: hidden; display: none !important;}
    .viewerBadge_container__1QSob {display: none !important;}
    
    /* Remove padding around root Streamlit blocks */
    .main .block-container {
        padding: 0 !important;
        margin: 0 !important;
        max-width: 100% !important;
        width: 100% !important;
    }
    
    div[data-testid="stVerticalBlock"] > div:first-child {
        padding: 0 !important;
        margin: 0 !important;
    }
    
    /* Full-screen iframe styling */
    iframe {
        border: none !important;
        width: 100% !important;
        min-height: 100vh !important;
        display: block !important;
    }
    
    body, html {
        margin: 0 !important;
        padding: 0 !important;
        background-color: #070B0D !important;
        overflow-x: hidden !important;
    }
</style>
"""
st.markdown(hide_streamlit_chrome, unsafe_allow_html=True)

# File paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
HTML_FILE = os.path.join(BASE_DIR, "index.html")
CSS_FILE = os.path.join(BASE_DIR, "styles.css")
JS_FILE = os.path.join(BASE_DIR, "app.js")
LOGO_FILE = os.path.join(BASE_DIR, "assets", "skillsprint-brand.jpeg")

def read_text_file(filepath):
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            return f.read()
    return ""

def read_image_base64(filepath):
    if os.path.exists(filepath):
        with open(filepath, "rb") as f:
            return base64.b64encode(f.read()).decode("utf-8")
    return ""

# Read files
html_content = read_text_file(HTML_FILE)
css_content = read_text_file(CSS_FILE)
js_content = read_text_file(JS_FILE)
logo_b64 = read_image_base64(LOGO_FILE)

# Replace local logo paths with inline base64 data URI for zero-dependency portability
if logo_b64:
    logo_data_uri = f"data:image/jpeg;base64,{logo_b64}"
    html_content = html_content.replace("assets/skillsprint-brand.jpeg", logo_data_uri)
    js_content = js_content.replace("assets/skillsprint-brand.jpeg", logo_data_uri)

# Inline the Claymorphic stylesheet
if css_content:
    html_content = html_content.replace(
        '<link rel="stylesheet" href="styles.css">',
        f"<style>\n{css_content}\n</style>"
    )

# Inline the application script
if js_content:
    html_content = html_content.replace(
        '<script src="app.js"></script>',
        f"<script>\n{js_content}\n</script>"
    )

# Render the SkillSprint experience with native scrolling
components.html(html_content, height=1000, scrolling=True)
