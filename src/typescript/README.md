---
title: Typescript中的Omit、Pick、Partial、Required
date: 2023年2月13日11:52:30
categories:
  - Typescript
tags:
  - Typescript类型
---

<custom-header/>

**接口示例**

```ts
interface Contact {
  name: string; // 姓名
  phone?: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}
```

### Omit 去除类型中某些项

**使用**

`Omit <T, K>`

其中 T 是 type 也就是类型的简写， K 是 key 的简写，所以这里的意思就是忽略该类型的 key 属性

```ts
interface Contact {
  name: string; // 姓名
  phone: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}

type Person = Omit<Contact, "avatar" | "userid">;

/**
type Person = {
    name: string;
    phone?: string | undefined;
    email: string;
}
*/
```

**源码**

```ts
/**
 * Construct a type with the properties of T except for those in type K.
 */

1. Exclude<keyof T, K> 排除掉指定类型，也就是传入进来的"avatar" 和 "userid"
2. 然后在T中获取剩余的类型 （Pick<T, 'name' | 'phone' | 'email'>）
3. 最后得到 'name' | 'phone' | 'email'

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

### Pick 选取类型中指定类型

**使用**

`Pick <T, K>`

从一个复合类型中，取出几个想要的类型的组合。

```ts
interface Contact {
  name: string; // 姓名
  phone: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}

type Person = Pick<Contact, "name" | "email">;

/**
type Person = {
    name: string;
    email: string;
}
*/
```

**源码**

```ts
1. K extends keyof T，就是做一个类型约束，K必须是T中的一个子集，不是的话直接报错。
   假如 type T = 'a' | 'b' | 'c', 那么K可以是'a', 也可以是'a'|'c', 'a'|'b'|'c'

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

### Partial 将类型中所有选项变为可选

**使用**

`Partial <T>`

Partial 将类型中所有选项变为可选，即加上？。

```ts
interface Contact {
  name: string; // 姓名
  phone: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}

type Person = Partial<Contact>;

/**
type Person = {
    name?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
    avatar?: string | undefined;
    userid?: string | undefined;
}
*/
```

**源码**

```ts
/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

### Required 将类型中所有选项变为必选

**使用**

`Required <T>`

Required 将类型中所有选项变为必选，去除所有？

```ts
interface Contact {
  name: string; // 姓名
  phone: string; // 手机号
  email?: string; // 邮箱
  avatar: string; // 头像
  userid?: string; // id
}

type Person = Required<Contact>;

/**
type Person = {
    name: string;
    phone: string;
    email: string;
    avatar: string;
    userid: string;
}
*/
```

**源码**

```ts
/**
 * Make all properties in T required
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};
```
