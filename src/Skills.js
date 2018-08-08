import unionBy from 'lodash/unionBy'

const logosForSkills = [
  {
    name: 'Java',
    logo: 'java-logo.png'
  },
  {
    name: 'JavaScript',
    logo: 'javascript-logo.png'
  },
  {
    name: 'React.js',
    logo: 'react-logo.png'
  },
  {
    name: 'Spring Framework',
    logo: 'spring-logo.png'
  },
  {
    name: 'Amazon Web Services (AWS)',
    logo: 'aws-logo.png'
  },
  {
    name: 'Docker',
    logo: 'docker-logo.png'
  },
  {
    name: 'Microsoft Azure',
    logo: 'azure-logo.png'
  },
  {
    name: 'Redux',
    logo: 'redux-logo.png'
  },
  {
    name: 'Ansible',
    logo: 'ansible-logo.png'
  }
]

export const enrichSkills = (skills) => {
  return unionBy(
    logosForSkills,
    skills,
    'name')
}
