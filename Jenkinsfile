pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git "https://github.com/Rakshihta/dev.git"
            }
        }
        stage('Install') {
            steps {
                bat "npm install"
            }
        }
        stage('Run') {
            steps {
                bat "node app.js"
            }
        }
        stage('Test') {
            steps {
                bat "npm test"
            }
        }
    }
}