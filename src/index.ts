import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

console.log('dirname: ', __dirname);

const main = async () => {  
    // connect to database
    const orm = await MikroORM.init(microConfig);
    // run migrations
    await orm.getMigrator().up();
    // run sql
    // const post = orm.em.create(Post, {title: 'My first post'});
    // await orm.em.persistAndFlush(post);

    const posts = await orm.em.find(Post, {});
    console.log("Posts: ", posts);
}

main().catch(err => console.log(err));
