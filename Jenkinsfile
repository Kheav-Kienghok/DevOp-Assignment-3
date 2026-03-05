pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/Kheav-Kienghok/DevOp-Assignment-3.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'cd project && npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t foodexpress-api ./project'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop foodexpress-container || true
                docker rm foodexpress-container || true
                docker run -d -p 3000:3000 --name foodexpress-container foodexpress-api
                '''
            }
        }

    }
}
