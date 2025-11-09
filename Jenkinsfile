pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Manoj2005-ui/food-delivery.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }

        stage('Verify Services') {
            steps {
                script {
                    sh 'curl -f http://localhost:3001/health'
                    sh 'curl -f http://localhost:3002/health'
                    sh 'curl -f http://localhost:3003/health'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up containers...'
            sh 'docker-compose down'
        }
    }
}
