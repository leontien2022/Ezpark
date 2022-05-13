import os
from dotenv import load_dotenv
load_dotenv()

SECRET_KEY = os.getenv('SECRET_KEY')
AWS_RDS_HOST = os.getenv('AWS_RDS_HOST')
USER=os.getenv('Ezpark_USER')
PASSWORD=os.getenv('Ezpark_PASSWORD')
GOOGLE_API=os.getenv('googleApi')
# PARTNER_KEY=os.getenv('PARTNER_KEY')
