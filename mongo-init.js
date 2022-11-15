db.createUser(
    {
       user: "brc4cb"
       pwd: "olivegardenisyummy" 
       roles: [
            {
                role:"readWrite", 
                db: "init_db"
            }
            ]
    }

    )
;