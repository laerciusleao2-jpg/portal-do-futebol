import './Results.css'

export default function Results({ fullPage = false }) {
  const results = [
    {
      id: 1,
      home: 'Flamengo',
      away: 'Vasco',
      homeScore: 3,
      awayScore: 1,
      date: '01/04/2026',
      time: '20:00',
      stadium: 'Maracanã',
      competition: 'Campeonato Brasileiro'
    },
    {
      id: 2,
      home: 'São Paulo',
      away: 'Corinthians',
      homeScore: 2,
      awayScore: 2,
      date: '01/04/2026',
      time: '18:30',
      stadium: 'Morumbi',
      competition: 'Campeonato Brasileiro'
    },
    {
      id: 3,
      home: 'Palmeiras',
      away: 'Santos',
      homeScore: 4,
      awayScore: 0,
      date: '31/03/2026',
      time: '19:00',
      stadium: 'Allianz Parque',
      competition: 'Campeonato Brasileiro'
    },
    {
      id: 4,
      home: 'Atlético Mineiro',
      away: 'Cruzeiro',
      homeScore: 1,
      awayScore: 1,
      date: '31/03/2026',
      time: '16:00',
      stadium: 'Arena MRV',
      competition: 'Campeonato Brasileiro'
    },
    {
      id: 5,
      home: 'Real Madrid',
      away: 'Barcelona',
      homeScore: 2,
      awayScore: 1,
      date: '01/04/2026',
      time: '21:00',
      stadium: 'Santiago Bernabéu',
      competition: 'La Liga'
    },
    {
      id: 6,
      home: 'Manchester City',
      away: 'Liverpool',
      homeScore: 3,
      awayScore: 2,
      date: '31/03/2026',
      time: '15:30',
      stadium: 'Etihad Stadium',
      competition: 'Premier League'
    }
  ]

  return (
    <section className={`results-section ${fullPage ? 'full-page' : ''}`}>
      <div className="section-header">
        <h2>⚽ Resultados Recentes</h2>
        {!fullPage && <a href="#" className="see-all">Ver Todos →</a>}
      </div>
      <div className={`results-list ${fullPage ? 'grid' : ''}`}>
        {results.map(result => (
          <div key={result.id} className="result-card">
            <div className="result-competition">{result.competition}</div>
            <div className="result-match">
              <div className="team home-team">
                <span className="team-name">{result.home}</span>
              </div>
              <div className="score">
                <span className="score-number">{result.homeScore}</span>
                <span className="score-separator">-</span>
                <span className="score-number">{result.awayScore}</span>
              </div>
              <div className="team away-team">
                <span className="team-name">{result.away}</span>
              </div>
            </div>
            <div className="result-info">
              <span className="date-time">{result.date} às {result.time}</span>
              <span className="stadium">{result.stadium}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
