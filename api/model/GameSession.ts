import { SchemaDefinition as def } from '@contember/schema-definition'

import { PlayerScore } from './PlayerScore'

export class GameSession {
	date = def.dateTimeColumn()
	players = def.oneHasMany(PlayerScore, 'gameSession')
}
