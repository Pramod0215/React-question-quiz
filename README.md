# Question Quiz
This is multiple choice answer Time and number of atempt shows . This is very simple and useful for preparation interview.

### Prerequisites

You need to install the following packages for backend:

```
asgiref==3.2.3
Django==3.0.1
django-cors-headers==3.2.0
django-jsonfield==1.4.0
djangorestframework==3.11.0
pkg-resources==0.0.0
pytz==2019.3
six==1.13.0
sqlparse==0.3.0
psycopg2==2.7.4

```
### Installation

Clone the repository

```
https://github.com/Pramod0215/Catalog-Product-Management/
```

Setting up your virtual environment:

```
python3 -m venv .env
```

Activating Virtual  Environment

```
source .env/bin/activate
```
Once the repository is cloned and virtual environment set up, go to the directory where the requirements.txt(Catalogue-management-system/backend/) is and type the following code in your terminal:

### Database (SQlite) : 
Using clould datebase which is provided by django.

Create database
```
python3 manage.py migrate
```
When changeing any field(add new field, Rename, Delate)
```
python3 manage.py makemigrations
```

For Frontend which is ReactJS,
Dependencies are: 
```
"nodejs":"^v8.10.0",
"npm":"^6.13.4",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-router-dom": "^5.1.2",
"react-scripts": "0.9.5"

```

Go to '/Cab-allocation-system/frontend' and type the following code in the terminal:
```
"sudo apt install nodejs",
"node --version",
"npm install", 
"npm -v",

```
Then to run the react server, type the code:
```
npm start
```
