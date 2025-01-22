import { DataTypes } from "sequelize";
import { Column, Model, Table, BelongsToMany, HasMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { Post } from "src/posts/posts.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({ type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'user@example.com', description: 'Почтовый адрес'})
    @Column({ type: DataTypes.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example: '123456', description: 'Пароль'})
    @Column({ type: DataTypes.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: true, description: 'Забанен ли пользователь'})
    @Column({ type: DataTypes.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({example: 'spam', description: 'Причина бана'})
    @Column({ type: DataTypes.STRING })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Post)
    posts: Post[]
    
}
