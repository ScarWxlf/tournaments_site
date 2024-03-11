import json
import pandas as pd
import sqlite3
from sqlite3 import Error

def create_connection():
    conn = None
    try:
        conn = sqlite3.connect(':memory:')
        print(f'successful connection with sqlite version {sqlite3.version}')
    except Error as e:
        print(e)

    return conn

def close_connection(conn):
    try:
        conn.close()
        print("connection closed")
    except Error as e:
        print(e)

def create_table(conn):
    try:
        conn.execute('''
            CREATE TABLE result(
                id integer PRIMARY KEY,
                date text,
                game_and_format text,
                prize_fund integer,
                start_time text
            )
        ''')
        print("table created")
    except Error as e:
        print(e)

def insert_data(conn, data):
    cur = conn.cursor()
    for item in data:
        cur.execute("INSERT INTO result VALUES (?, ?, ?, ?, ?)",
                    (item['id'], item['Date'], item['Game and format'], item['Prize fund'], item['Start time']))
    conn.commit()

def export_to_excel(conn, output):
    try:
        df = pd.read_sql_query("SELECT * FROM result", conn)
        df.to_excel(output, index=False)
    except Error as e:
        print(e)

        
def main():
    with open('result.json',"r", encoding="utf-8") as f:
        data = json.load(f)

    conn = create_connection()

    if conn is not None:
        create_table(conn)
        insert_data(conn, data)
        export_to_excel(conn, "output.xlsx")
        close_connection(conn)

if __name__ == '__main__':
    main()