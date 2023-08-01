import { SchemaDefinition as def } from '@contember/schema-definition'

import { PlayerScore } from './PlayerScore'

export class Player {
	name = def.stringColumn()
	scores = def.oneHasMany(PlayerScore, 'player')
}
