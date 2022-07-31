import type { User } from '~~/types/users'
import { NotFoundException } from '~/utils/exceptions'
const mysql = require('mysql2/promise');
export class UsersService{
  async findAll(): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('SELECT * FROM `user`');
    return rows
  }
  async findOne(id: number): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('SELECT * FROM `user` WHERE id = ?',[id]);
    return rows
  }
  async findOneByName(name: string): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('SELECT * FROM `user` WHERE username = ?',[name]);
    return rows
  }
  async update(username: string, id: number): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('UPDATE `user` SET `username` = ? WHERE `user`.`id` = ?',[username,id]);
    return rows
  }
  async create(username: string): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('INSERT INTO `user` (`username`) VALUES (?)',[username]);
    return rows
  }
  async delete(id: number) : Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('DELETE FROM `user` WHERE `user`.`id` = ?',[id]);
    return rows
  }
}