import { useState } from 'react'
import './Tables.css'

export default function Tables() {
  const [selectedLeague, setSelectedLeague] = useState('brasileiro')

  const tables = {
    brasileiro: [
      { pos: 1, team: 'Palmeiras', played: 10, wins: 7, draws: 2, losses: 1, points: 23 },
      { pos: 2, team: 'Flamengo', played: 10, wins: 6, draws: 3, losses: 1, points: 21 },
      { pos: 3, team: 'São Paulo', played: 10, wins: 6, draws: 2, losses: 2, points: 20 },
      { pos: 4, team: 'Botafogo', played: 10, wins: 5, draws: 3, losses: 2, points: 18 },
      { pos: 5, team: 'Atlético Mineiro', played: 10, wins: 5, draws: 2, losses: 3, points: 17 },
      { pos: 6, team: 'Corinthians', played: 10, wins: 4, draws: 4, losses: 2, points: 16 },
    ],
    libertadores: [
      { pos: 1, team: 'Palmeiras', played: 6, wins: 5, draws: 1, losses: 0, points: 16 },
      { pos: 2, team: 'River Plate', played: 6, wins: 4, draws: 2, losses: 0, points: 14 },
      { pos: 3, team: 'Flamengo', played: 6, wins: 4, draws: 1, losses: 1, points: 13 },
      { pos: 4, team: 'Boca Juniors', played: 6, wins: 3, draws: 2, losses: 1, points: 11 },
    ],
    laliga: [
      { pos: 1, team: 'Real Madrid', played: 28, wins: 22, draws: 3, losses: 3, points: 69 },
      { pos: 2, team: 'Barcelona', played: 28, wins: 20, draws: 4, losses: 4, points: 64 },
      { pos: 3, team: 'Atlético Madrid', played: 28, wins: 18, draws: 5, losses: 5, points: 59 },
      { pos: 4, team: 'Sevilla', played: 28, wins: 15, draws: 6, losses: 7, points: 51 },
    ]
  }

  const leagueNames = {
    brasileiro: 'Campeonato Brasileiro',
    libertadores: 'Copa Libertadores',
    laliga: 'La Liga'
  }

  const currentTable = tables[selectedLeague]

  return (
    <section className="tables-section">
      <div className="section-header">
        <h2>📊 Tabelas de Classificação</h2>
      </div>

      <div className="league-selector">
        {Object.keys(tables).map(league => (
          <button
            key={league}
            className={`league-btn ${selectedLeague === league ? 'active' : ''}`}
            onClick={() => setSelectedLeague(league)}
          >
            {leagueNames[league]}
          </button>
        ))}
      </div>

      <div className="table-container">
        <table className="standings-table">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Time</th>
              <th>J</th>
              <th>V</th>
              <th>E</th>
              <th>D</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {currentTable.map(row => (
              <tr key={row.pos} className={`position-${row.pos}`}>
                <td className="position">{row.pos}</td>
                <td className="team-name">{row.team}</td>
                <td>{row.played}</td>
                <td className="wins">{row.wins}</td>
                <td className="draws">{row.draws}</td>
                <td className="losses">{row.losses}</td>
                <td className="points"><strong>{row.points}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-legend">
        <p><strong>J:</strong> Jogos | <strong>V:</strong> Vitórias | <strong>E:</strong> Empates | <strong>D:</strong> Derrotas | <strong>Pts:</strong> Pontos</p>
      </div>
    </section>
  )
}
