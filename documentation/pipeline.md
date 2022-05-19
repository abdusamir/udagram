# Pipeline Process

## CircleCI is used as the primary tool to build this pipeline

<br>

### The configuration of the pipeline goes as follows

<br>

#### 1- Firstly CircleCI install node and aws cli and eb cli

#### 2- Then circleCI checks if there're changes made to the repo uisng the checkout process

#### 3- Then CircleCI installs the frontend dependencies to make available across the environment

#### 4- Then it installs the backend dependencies

#### 5- After the installation is done, CircleCI builds the frontend and the backend to make the app ready for production

#### 6- After building both the frontend and backend CircleCI deploys the frontend to S3 bucket and the backend to EB
