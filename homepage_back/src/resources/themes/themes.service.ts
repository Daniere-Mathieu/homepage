import type { theme } from '~~/types/theme'
import { NotFoundException } from '~/utils/exceptions'
const mysql = require('mysql2/promise');
export class ThemesService{
  async findAll(): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('SELECT * FROM `theme`');
    return rows;
  };
  async findOne(id: number): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('SELECT * FROM `theme` WHERE id = ?',[id]);
    return rows;
  };
  async update(content_name: string,user: number, id: number): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('UPDATE `theme` SET `content_name` = ?, `user` = ? WHERE `theme`.`id` = ?',[content_name,user,id]);
    return rows;
  };
  async create(content_name: string,user: number): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('INSERT INTO `theme` (`content_name`,`user`) VALUES (?,?)',[content_name,user]);
    return rows;
  };
  async delete(id: number) : Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('DELETE FROM `theme` WHERE `theme`.`id` = ?',[id]);
    return rows;
  };
}