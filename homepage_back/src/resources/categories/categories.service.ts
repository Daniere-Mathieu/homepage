import type { category } from '~~/types/category'
import { NotFoundException } from '~/utils/exceptions'
const mysql = require('mysql2/promise');
export class CategoriesService{
  async findAll(): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('SELECT * FROM `category`');
    return rows;
  };
  async findOne(id: number): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('SELECT * FROM `category` WHERE id = ?',[id]);
    return rows;
  };
  async update(content_name: string,id: number,theme: number): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('UPDATE `category` SET `content_name` = ?, `theme` = ? WHERE `category`.`id` = ?',[content_name,theme,id]);
    return rows;
  };
  async create(content_name: string,theme: number): Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('INSERT INTO `category` (`content_name`,`theme`) VALUES (?,?)',[content_name,theme]);
    return rows;
  };
  async delete(id: number) : Promise<object[]> {
    const connection = await mysql.createConnection({host:'localhost', user: 'Rihyette', password: "password",database: 'homepage'});
    const [rows] = await connection.execute('DELETE FROM `category` WHERE `category`.`id` = ?',[id]);
    return rows;
  };
}