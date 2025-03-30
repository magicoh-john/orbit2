import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "@/redux/authSlice";
import "/public/css/layout/Layout.css";

// 구매자(BUYER) 및 관리자(ADMIN) 메뉴
const buyerAdminMenuItems = [
  { label: "대시보드", path: "/dashboard" },
  { label: "사용자관리", path: "/members", roles: ["ADMIN"] },
  { label: "협력사관리", path: "/supplier" },
  { label: "품목관리", path: "/items" },
  { label: "프로젝트관리", path: "/projects" },
  { label: "구매요청관리", path: "/purchase-requests" },
  { label: "결재관리", path: "/approvals" },
  { label: "입찰공고관리", path: "/biddings" },
  { label: "계약관리", path: "/contracts" },
  { label: "발주관리", path: "/orders" },
  { label: "입고관리", path: "/deliveries" },
  { label: "송장관리", path: "/invoices" },
  { label: "자금관리", path: "/funds" },
  { label: "시스템 설정", path: "/system", roles: ["ADMIN"] },
  { 
    label: "통계조회", 
    path: "/statistics",
    subItems: [
      { label: "월별 구매 실적", path: "/statistics/orders/monthly" },
      { label: "카테고리별 구매 실적", path: "/statistics/orders/category" },
      { label: "품목별 구매 실적", path: "/statistics/orders/item" },
      { label: "공급업체별 구매 실적", path: "/statistics/orders/supplier" }
    ]
  },
];

// 공급업체(SUPPLIER) 메뉴
const supplierMenuItems = [
  { label: "대시보드", path: "/suppliers/dashboard" },
  { label: "입찰 정보", path: "/suppliers/bidding" },
  { label: "계약 정보", path: "/suppliers/contracts" },
  { label: "주문 정보", path: "/suppliers/orders" },
  { label: "송장 관리", path: "/suppliers/invoices" },
  { label: "내 정보 관리", path: "/supplier/registrations" }
];

function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // 현재 사용자의 역할에 따라 메뉴 아이템 결정
  const isSupplier = user?.roles?.includes("SUPPLIER");
  const menuItems = isSupplier ? supplierMenuItems : buyerAdminMenuItems;

  // 현재 활성화된 메뉴 확인
  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  // 사용자 역할에 따른 메뉴 접근 권한 확인
  const hasAccess = (item) => {
    // roles 속성이 없으면 모든 사용자가 접근 가능
    if (!item.roles) return true;

    // roles 속성이 있으면 해당 역할을 가진 사용자만 접근 가능
    return user?.roles?.some((role) => item.roles.includes(role));
  };

  // 로그아웃 핸들러
  const handleLogout = async () => {
    try {
      // 서버에 로그아웃 요청 (옵션)
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include"
      });

      // Redux 상태 초기화
      dispatch(clearUser());

      // 로그인 페이지로 리다이렉트
      navigate("/login");
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);

      // 에러 발생해도 클라이언트 상태는 초기화
      dispatch(clearUser());
      navigate("/login");
    }
  };

  return (
    <div className="sidebar_container">
      {/* 메뉴 항목 */}
      <ul className="sidebar_menu">
        {menuItems.map(
          (item, index) =>
            // 접근 권한이 있는 메뉴만 표시
            hasAccess(item) && (
              <li key={index} className="sidebar_menu_item">
                <Link
                  to={item.path}
                  className={`sidebar_menu_link ${
                    isActive(item.path) ? "active" : ""
                  }`}>
                  {item.label}
                </Link>
                {item.subItems && (
                  <ul className="sidebar_submenu">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={`${index}-${subIndex}`} className="sidebar_submenu_item">
                        <Link
                          to={subItem.path}
                          className={`sidebar_submenu_link ${
                            isActive(subItem.path) ? "active" : ""
                          }`}>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
        )}
      </ul>

      <div className="sidebar_bottom">
        <button
          onClick={handleLogout}
          className="sidebar_logout"
          style={{ cursor: "pointer" }}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z"
              fill="#666666"
            />
          </svg>
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default SideBar;
