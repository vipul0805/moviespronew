pipeline{
  agent any
  stages{
  stage('Performance Tests') {
  steps {
    deleteDir()
    checkout scm
     bat label: 'Test running', script: '''npx lighthouse-ci http://localhost:3000/ --jsonReport --report=.'''
  }
  post {
    always {
      publishHTML (target: [
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: true,
        reportDir: '.',
        reportFiles: 'report.html',
        reportName: "Lighthouse"
      ])
    }
  }
}
}
}