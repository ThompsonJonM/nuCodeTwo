create database parties_db;

use parties_db;

create table clients (
    id int not null auto_increment,
    client_name varchar(255) not null,
    primary key (id)
);

create table parties (
    id int not null auto_increment,
    party_name varchar(255) not null,
    party_type varchar(255) not null,
    party_cost int(10,2) not null,
    client_id int not null,
    primary key (id),
    foreign key (client_id) references clients(id)
);