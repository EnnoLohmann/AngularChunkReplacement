pipeline {
 agent { 
    node { 
      label 'docker'
    }
  }
  tools {
    nodejs 'nodejs'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}
