pipeline {
  agent {
    node {
      label 'MyNode'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
  tools {
    nodejs 'MyNode'
  }
}