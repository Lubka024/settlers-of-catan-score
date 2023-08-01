import { SchemaDefinition as def } from '@contember/schema-definition'

import { Player } from './Player'
import { GameSession } from './GameSession'

export class PlayerScore {
	player = def.manyHasOne(Player, 'scores')
	gameSession = def.manyHasOne(GameSession, 'players')
	score = def.intColumn()
}
