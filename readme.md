## Installing package

After cloning this repository. You can installing all the required package by execute this in terminal:

```bash
npm install
```

### Environtment Variable
You also need to setup environtment variable.

Create `.env` file on root of the directory and add all the necessery variable:

```bash
PORT=3001
DB_USER=<your_db_user>
DB_PASSWORD=<your_db_password>
DB_NAME=carenow_db
DB_HOST=localhost
DB_PORT= 5432
```

`NOTE: make sure the port is 3001, because thats the number the frontend will hit`

### Database Seeding
To be able to create a User Treatment you need to create all the neccessart data to be consumed by frontend and backend.

You can execute this **sql script**
```sql
drop table if exists user_treatment_prescriptions;
drop table if exists user_treatment_descriptions;
drop table if exists user_treatments;
drop table if exists descriptions;
drop table if exists prescriptions;
drop table if exists users;

create table users (
	user_id BIGSERIAL primary key,
	name VARCHAR not null,
	created_at DATE not null,
	updated_at DATE not null,
	deleted_at DATE null
);

create table prescriptions (
	prescription_id SERIAL primary key,
	name VARCHAR not null,
	created_at DATE not null,
	updated_at DATE not null,
	deleted_at DATE null
);

create table descriptions (
	description_id SERIAL primary key,
	name VARCHAR not null,
	created_at DATE not null,
	updated_at DATE not null,
	deleted_at DATE null
);

create table user_treatments (
	user_treatment_id BIGSERIAL primary key,
	user_id BIGINT not null,
	cost numeric not null,
	schedule DATE not null,
	created_at DATE not null,
	updated_at DATE not null,
	deleted_at DATE null,
	
	constraint fk_user
		foreign key(user_id) references users(user_id)
);

create table user_treatment_descriptions (
	user_treatment_description_id BIGSERIAL primary key,
	user_treatment_id BIGINT,
	description_id INT not null,
	created_at DATE not null,
	updated_at DATE not null,
	deleted_at DATE null,
	
	
	constraint fk_user_treatment
		foreign key(user_treatment_id) references user_treatments(user_treatment_id),
		
	constraint fk_user_treatment_description
		foreign key(description_id) references descriptions(description_id)
);

create table user_treatment_prescriptions (
	user_treatment_prescription_id BIGSERIAL primary key,
	user_treatment_id BIGINT,
	prescription_id INT not null,
	created_at DATE not null,
	updated_at DATE not null,
	deleted_at DATE null,
	
	constraint fk_user_treatment
		foreign key(user_treatment_id) references user_treatments(user_treatment_id),
		
	constraint fk_user_treatment_description
		foreign key(prescription_id) references prescriptions(prescription_id)
);


insert into 
	users(
		name,
		created_at,
		updated_at
	)
	values
		('admin', NOW(), NOW()),
		('Budi', NOW(), NOW()),
		('Andi', NOW(), NOW());


insert into
	descriptions(
		name,
		created_at,
		updated_at
	)
	values
		('headache', NOW(), NOW()),
		('fever', NOW(), NOW()),
		('gerd', NOW(), NOW());

insert into
	prescriptions(
		name,
		created_at,
		updated_at
	)
	values
		('paracetamol', NOW(), NOW()),
		('ozempic', NOW(), NOW()),
		('panadol', NOW(), NOW());

insert into
	user_treatments(
		user_id,
		cost,
		schedule,
		created_at,
		updated_at
	)
	values
		(1, 2000, NOW(), NOW(), NOW()),
		(2, 2000, NOW(), NOW(), NOW());
```

### Running the server
Now you can run the server
```bash
npm run dev
```
