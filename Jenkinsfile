pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Kheav-Kienghok/DevOp-Assignment-3.git'
                echo "Cloning the Repository"
            }
        }

        stage('Install Dependencies') {
            steps {
                // Go into project folder and install dependencies
                sh 'cd project && npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image from project folder
                sh 'docker build -t foodexpress-api ./project'
            }
        }

        stage('Deploy Container') {
            steps {
                // Stop/remove previous container if exists
                sh '''
                docker stop foodexpress-container || true
                docker rm foodexpress-container || true
                docker run -d -p 3000:3000 --name foodexpress-container foodexpress-api
                '''
            }
        }

    }

    post {
        failure {
            echo 'Pipeline failed! Check logs for errors.'
        }
        success {
            echo 'Pipeline completed successfully! FoodExpress API is running.'
        }
    }
}
