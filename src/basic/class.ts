// protected
class Parent {
    protected age: number;
    public constructor(age: number) {
        this.age = age;
    }
    protected getAge(): number {
        return this.age;
    }
}
const p1 = new Parent(18);
console.log(p1.age); // error 属性“age”为私有属性，只能在类“ParentA”中访问
console.log(Parent.age); // error 类型“typeof ParentA”上不存在属性“age”
// tslint:disable-next-line:max-classes-per-file
class Child extends Parent {
    public constructor(age: number) {
        super(age);
        console.log('con');
        console.log(super.age); // undefined
        console.log(super.getAge());
    }
}
new Child(18);

// readonly
class UserInfo {
    public readonly name: string;
    public constructor(name: string) {
        this.name = name;
    }
}
const user = new UserInfo('Lison');
user.name = 'haha'; // error Cannot assign to 'name' because it is a read-only property

// 参数属性
class A {
    public constructor(name: string) {}
}
const a = new A('aaa');
console.log(a.name); // error 类型“A”上不存在属性“name”
class B {
    public constructor(name: string) {
        console.log(name);
    }
}
const b = new B('bbb');
console.log(b.name); // "bbb"

// 抽象类
abstract class People {
    public constructor(name: string) {
        console.log(name);
    }
    public abstract printName(): void;
}
class Man extends People {
    public constructor(name: string) {
        super(name);
        this.name = name;
    }
    public printName(): void {
        console.log(this.name);

    }
}
const m = new Man(); // error 应有 1 个参数，但获得 0 个
const man = new Man('lison');
man.printName(); // 'lison'
const p = new People('lison'); // error 无法创建抽象类的实例

// 泛型类类型
const create = <T>(c: new () => T): T => {
    return new c();
};
class Info {
    public age: number;
}
create(Info).age;
create(Info).name; // error 类型“Info”上不存在属性“name”
