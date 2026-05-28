pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch : 'main', url : "https://github.com/Rakshihta/dev.git"
            }
        }
        stage('Install') {
            steps {
                bat "npm install"
            }
        }
        stage('Run') {
            steps {
                bat "node add.js"
            }
        }
        stage('Test') {
            steps {
                bat "npm test"
            }
        }
    }
}