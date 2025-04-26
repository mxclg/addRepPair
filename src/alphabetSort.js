import fs from 'fs'
import { parse, stringify } from 'yaml'
import { espansoConfigBase } from './basePath.js'

const alphabetSort = () => {
  const readFile = fs.readFileSync(espansoConfigBase, 'utf8')
  const parsed = parse(readFile)

  const sortedTriggers = parsed.matches.sort((a, b) => {
    return a.trigger.localeCompare(b.trigger)
  })

  const formattedMatches = sortedTriggers
    .map(match => stringify({ matches: [match] })
      .replace('matches:\n', '').trim())
    .join('\n\n')

  const rightIndentTrigger = formattedMatches.replace(/^(- trigger:)/gm, '  $1')
  const finalYaml = `matches:\n${rightIndentTrigger}\n`

  return fs.writeFileSync(espansoConfigBase, finalYaml, 'utf8')
}

export default alphabetSort
