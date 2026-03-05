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
                sh '''
                # Kill any process using port 3000
                if lsof -i :3000 -t >/dev/null; then
                    echo "Port 3000 is in use, killing process..."
                    sudo fuser -k 3000/tcp
                fi
        
                # Stop/remove previous container
                docker stop foodexpress-container || true
                docker rm foodexpress-container || true
        
                # Run new container
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
