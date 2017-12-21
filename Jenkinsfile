pipeline {
 agent { 
    node { 
      label 'docker'
    }
  }
  tools {
    nodejs 'MyNode'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}
