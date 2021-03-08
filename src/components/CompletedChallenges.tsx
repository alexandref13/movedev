import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { Container } from '../styles/components/CompleteChallenges'

export function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <Container>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}
