import mysql from "mysql2/promise";

export class MoveGateway {
  async insert(
    conn: mysql.Connection,
    turnId: number,
    disc: number,
    x: number,
    y: number
  ) {
    await conn.execute(
      "insert into moves (turn_id, x, y, disc) values (?, ?, ?, ?)",
      [turnId, x, y, disc]
    );
  }
}
