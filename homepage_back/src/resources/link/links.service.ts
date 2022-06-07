import type { link } from '~~/types/link'
import { NotFoundException } from '~/utils/exceptions'
const mysql = require('mysql2/promise');
export class LinksService{
  async findAll(): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('SELECT * FROM `link`');
    return rows;
  };
  async findOne(id: number): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('SELECT * FROM `link` WHERE id = ?',[id]);
    return rows;
  };
  async update(content_name: string,link: string, id: number,category: number): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('UPDATE `link` SET `content_name` = ?, `link` = ? , `category` = ? WHERE `link`.`id` = ?',[content_name,link,category,id]);
    return rows;
  };
  async create(content_name: string,link: string,category: number): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('INSERT INTO `link` (`content_name`,`link`,`category`) VALUES (?,?,?)',[content_name,link,category]);
    return rows;
  };
  async delete(id: number) : Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('DELETE FROM `link` WHERE `link`.`id` = ?',[id]);
    return rows;
  };
}