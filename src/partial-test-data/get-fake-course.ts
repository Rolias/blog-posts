import {randomUUID} from 'crypto'
import faker from 'faker'
export interface Course {
  id: string
  name: string
  status: string
  length: number
  notes: string
  dueDate: Date
}

function getFakeCourse(course?: Partial<Course>): Course {
  const fakeCourse: Course = {
    id: course?.id ?? randomUUID(),
    name: course?.name ?? faker.random.words(3),
    status: course?.status ?? `delivered`,
    length: course?.length ?? faker.datatype.number(),
    notes: course?.notes ?? faker.lorem.sentence(25),
    dueDate: new Date(),
  }
  return fakeCourse
}

describe(`Using a Partial Course plan allows you to `, () => {
  it(`have a test where you specify nothing`, () => {
    const fakeCourse = getFakeCourse()
    fakeCourse.
  })
})
