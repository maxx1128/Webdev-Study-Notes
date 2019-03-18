# Databases

* Seeding - Can use ruby logic to speed up the seeding process and make it simpler

## Migration

When you're making changes to a database, this is done with a migration. This includes adding or updating tables, and including limitations and default values.

One good trick is "backfilling," or adding more default data during a migration. This is helpful when you're adding a bew data table, but need to create default associations that can't be done with a normal `create_table` method.

This is done by using a `SQL` statement, like the below:

```
class CreateNewTable < ActiveRecord::Migration[5.2]
  def change
    create_table :new_Table do |t|
      t.references :company, index: true, foreign_key: { to_table: :companys }, null: false
      t.timestamps

      t.string :string_variable, limit: 255, default: "
      t.integer :business_level
      t.boolean :is_horrible
    end

    reversible do |dir|
      dir.up do
        execute <<~SQL
          INSERT INTO new_Table(company_id, created_at, updated_at, business_level)
          SELECT id, level from companys
        SQL
      end
    end
  end
end
```
