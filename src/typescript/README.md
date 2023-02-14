---
title: Typescript的内置 Utility Types
date: 2023年2月13日11:52:30
categories:
  - Typescript
tags:
  - Typescript类型
---

<custom-header/>

## Omit 去除类型中某些项

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

## Pick 选取类型中指定类型

**使用**

`Pick<T, K>`

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

## Partial 将类型中所有选项变为可选

**使用**

`Partial<T>`

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

## Required 将类型中所有选项变为必选

**使用**

`Required<T>`

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

## Readonly 将类型中所有选项变为只读

**使用**

`Readonly<T>`

Readonly 将类型中所有选项变为只读

```ts
interface Contact {
  name: string; // 姓名
  phone: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}

type Person = Readonly<Contact>;

/**
type Person = {
    readonly name: string;
    readonly phone: string;
    readonly email: string;
    readonly avatar: string;
    readonly userid: string;
}
*/
```

**源码**

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

## Record 将属性全部变成指定类型

**使用**

`Record<K,T>`

构造一个类型，该类型具有一组属性 K，每个属性的类型为 T。可用于将一个类型的属性映射为另一个类型。

```ts
type Contact = "name" | "email";

type Person = Record<Contact, Number>;

/**
type Person = {
    name: Number;
    email: Number;
}
*/
```

**源码**

```ts
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

## Parameters 返回类型为 T 的函数的参数类型所组成的数组

**使用**

`Parameters<T>`

返回类型为 T 的函数的参数类型所组成的数组

```ts
declare function fn(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>;
/**
type T0 = []
*/

type T1 = Parameters<typeof fn>;
/**
type T1 = [arg: {
    a: number;
    b: string;
}]
*/
```

**源码**

```ts
- 待推断函数的返回类型 P，如果是函数，则返回函数的参数类型 P，否则返回 never

- 做一个标识，说明我要准备要推断P了，下面的语句就是对于P的判断。

type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
```

**如何理解**

举个例子：

```ts
- infer 可以在 extends 的条件语句中推断待推断的类型

- infer R 代表待推断的返回值类型，如果 T 是一个函数，则返回函数的返回值，否则返回 any

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```

[理解 TypeScript 中的 infer 关键字](https://juejin.cn/post/6844904170353328135)
