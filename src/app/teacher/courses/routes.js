import { subGroup } from '@/helpers/routes'

import { routes as frequencies } from './frequencies'
import { routes as grades } from './grades'
import { routes as groups } from './groups'
import { routes as quizzes } from './quizzes'
import { routes as subjects } from './subjects'

export default [
  ...subGroup('/frequencies', frequencies),
  ...subGroup('/grades', grades),
  ...subGroup('/groups', groups),
  ...subGroup('/quizzes', quizzes),
  ...subGroup('/subjects', subjects)
]
