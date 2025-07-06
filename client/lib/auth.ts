import { User, getStorageData, setStorageData, mockUsers } from "./mockData";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: "admin" | "user";
}

export const login = (email: string, password: string): AuthUser | null => {
  const users = getStorageData<User[]>("honda_users", mockUsers);
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    const authUser: AuthUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
    setStorageData("honda_current_user", authUser);
    return authUser;
  }

  return null;
};

export const register = (
  email: string,
  password: string,
  name: string,
): AuthUser | null => {
  const users = getStorageData<User[]>("honda_users", mockUsers);

  // Check if user already exists
  if (users.some((u) => u.email === email)) {
    return null;
  }

  const newUser: User = {
    id: Date.now().toString(),
    email,
    password,
    name,
    role: "user",
  };

  users.push(newUser);
  setStorageData("honda_users", users);

  const authUser: AuthUser = {
    id: newUser.id,
    email: newUser.email,
    name: newUser.name,
    role: newUser.role,
  };

  setStorageData("honda_current_user", authUser);
  return authUser;
};

export const logout = (): void => {
  localStorage.removeItem("honda_current_user");
};

export const getCurrentUser = (): AuthUser | null => {
  return getStorageData<AuthUser | null>("honda_current_user", null);
};

export const isAdmin = (): boolean => {
  const user = getCurrentUser();
  return user?.role === "admin";
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};
