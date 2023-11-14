/******
 *
 * 系统管理 类型定义
 *
 */

// 菜单查询条件
declare interface SysMenuQuery {
  keyword: string;
}

// 菜单 实体类型
declare interface SysMenuType {
  id: string;
  parentId: string;
  type: "1" | "2"; // 1菜单，2按钮
  path: string;
  name: string; // 路由名称
  code: string; // 权限标识
  redirect: string;
  component: string; // 注意，所在src/views下的相对路径
  isLink: boolean;
  meta: {
    title: string;
    icon: string;
    linkTo: string; // 外链跳转地址
    cache: boolean;
    hidden: boolean;
    isBreadcrumd: boolean;
  };
  sort: number;
  remark: string;
  createTime: string;
  updateTime: string;
  children: Array;
}

// 角色询条件
declare interface SysRoleQuery {
  name: string;
}

// 角色实体类型
declare interface SysRoleType {
  id: string;
  roleName: string;
  roleCode: string;
  status: boolean;
  remark: string;
  updateTime: string;
  createTime: string;
}
