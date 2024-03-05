
import { Entity, Column, PrimaryColumn } from 'typeorm-fire'

@Entity()
export class TestEntity {
  @PrimaryColumn()
  id: number

  @Column()
  description: string

  @Column()
  active: boolean

  @Column({type: 'blob'})
  payload: string
}
