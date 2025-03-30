
[관리자 계정]
testadmin / 1234

[redis]
비밀번호 있음 : ezen12345

[vite 사용 main.jsx]
main.jsx에서 Strict mode 제거

[구매 실적 통계 기능 구현됨.]

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (1, 'PRJ-2503-107', '프로젝트 1', '2025-02-07', '2025-04-11', 'R_AND_D', 'SI', '구매관리팀', 463775360, 10),
(2, 'PRJ-2503-955', '프로젝트 2', '2025-01-14', '2025-02-18', 'R_AND_D', 'SI', '구매관리팀', 176166355, 2),
(3, 'PRJ-2503-536', '프로젝트 3', '2025-02-14', '2025-04-03', 'R_AND_D', 'SI', '구매관리팀', 413153537, 2),
(4, 'PRJ-2503-783', '프로젝트 4', '2025-02-10', '2025-03-14', 'R_AND_D', 'SI', '구매관리팀', 139768916, 10),
(5, 'PRJ-2503-290', '프로젝트 5', '2024-12-28', '2025-03-12', 'R_AND_D', 'SI', '구매관리팀', 375756782, 1);

INSERT INTO purchase_requests (
purchase_request_id, request_type, request_name, request_number, request_date,
customer, business_department, business_budget, project_id, member_id)
VALUES
(1, 'GOODS', '구매 요청 1', 'REQ-2503-960', '2025-03-18', '고객 1', '구매관리팀', 44379585, 2, 1),
(2, 'GOODS', '구매 요청 2', 'REQ-2503-455', '2025-03-14', '고객 2', '구매관리팀', 40205273, 4, 9),
(3, 'GOODS', '구매 요청 3', 'REQ-2503-725', '2025-03-10', '고객 3', '구매관리팀', 13150964, 3, 1),
(4, 'GOODS', '구매 요청 4', 'REQ-2503-522', '2025-02-23', '고객 4', '구매관리팀', 25648338, 5, 6),
(5, 'GOODS', '구매 요청 5', 'REQ-2503-127', '2025-02-25', '고객 5', '구매관리팀', 6765366, 2, 8);


INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES
(1, '0c4cb788-a5c1-46c6-a', 5, 26926, 134630, 1),
(2, '104b32a5-3949-4628-9', 34, 1135, 38590, 1),
(3, '18c1f48f-2a86-4277-8', 9, 8744, 78696, 2),
(4, '36624bbe-afe0-469a-8', 99, 30340, 3003660, 1),
(5, '5667f656-653b-4f09-9', 2, 43100, 86200, 4);


INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (1, 'BID-2503-119', '입찰 공고 1', '2025-03-02', '2025-03-13', 38, 32088, 1219344),
(2, 'BID-2503-670', '입찰 공고 2', '2025-02-19', '2025-03-08', 17, 14597, 248149),
(3, 'BID-2503-517', '입찰 공고 3', '2025-03-10', '2025-04-08', 64, 54229, 3470656),
(4, 'BID-2503-911', '입찰 공고 4', '2025-03-03', '2025-03-14', 33, 85085, 2807805),
(5, 'BID-2503-793', '입찰 공고 5', '2025-03-05', '2025-04-03', 96, 75027, 7202592);

INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(1, 1, 1, '공급업체 1', 750000, 750000, 75000, 825000, NOW(), 1, NOW(), 1, 95, 1, 1, NOW()),
(2, 2, 2, '공급업체 2', 15000, 75000, 7500, 82500, NOW(), 1, NOW(), 1, 88, 1, 0, NULL),
(3, 3, 3, '공급업체 3', 450000, 450000, 45000, 495000, NOW(), 1, NOW(), 1, 92, 1, 0, NULL),
(4, 4, 4, '공급업체 4', 300000, 600000, 60000, 660000, NOW(), 1, NOW(), 1, 90, 1, 0, NULL),
(5, 5, 5, '공급업체 5', 1500000, 7500000, 750000, 8250000, NOW(), 1, NOW(), 1, 96, 1, 1, NOW());

INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(1, 'ORD-2503-001', 1, 1, 1, 1, '공급업체 1', '입찰공고 A', 1, 750000, 750000, 75000, 825000, 'system', NOW(), NOW()),
(2, 'ORD-2503-002', 2, 2, 2, 2, '공급업체 2', '입찰공고 B', 5, 15000, 75000, 7500, 82500, 'system', NOW(), NOW()),
(3, 'ORD-2503-003', 3, 3, 3, 3, '공급업체 3', '입찰공고 C', 1, 450000, 450000, 45000, 495000, 'system', NOW(), NOW()),
(4, 'ORD-2503-004', 4, 4, 4, 4, '공급업체 4', '입찰공고 D', 2, 300000, 600000, 60000, 660000, 'system', NOW(), NOW()),
(5, 'ORD-2503-005', 5, 5, 5, 5, '공급업체 5', '입찰공고 E', 5, 1500000, 7500000, 750000, 8250000, 'system', NOW(), NOW());


-- ----------------------------------------------------------------------------------------------

select * from bidding_orders;

INSERT INTO deliveries (
id, delivery_number, order_number, delivery_date, supplier_id, supplier_name,
total_amount, delivery_item_id, item_id, item_name, item_quantity, item_unit_price,
invoice_issued, receiver_id, bidding_order_id
) VALUES
(1, 'DEL-250321-943', 'ORD-2503-515', '2025-03-18', 1, '공급업체 1', 750000, 1, '0c4cb788-a5c1-46c6-a', '복합기', 1, 750000, 0, 6, 1),
(2, 'DEL-250321-954', 'ORD-2503-986', '2025-03-14', 2, '공급업체 2', 75000, 2, '5667f656-653b-4f09-9', 'A4 복사용지', 5, 15000, 0, 5, 2),
(3, 'DEL-250321-136', 'ORD-2503-993', '2025-03-15', 3, '공급업체 3', 450000, 3, '36624bbe-afe0-469a-8', '레이저 프린터', 1, 450000, 0, 8, 3),
(4, 'DEL-250321-818', 'ORD-2503-719', '2025-03-16', 4, '공급업체 4', 600000, 4, 'a44be502-7d37-49f7-b', '27인치 모니터', 2, 300000, 0, 2, 4),
(5, 'DEL-250321-647', 'ORD-2503-162', '2025-03-19', 5, '공급업체 5', 7500000, 5, 'c0115fdb-139c-4021-b', '노트북', 5, 1500000, 0, 10, 5);




INSERT INTO invoices (id, invoice_number, issue_date, due_date, payment_date, supply_price, vat, total_amount, approver_id, supplier_id, delivery_id)
VALUES
(1, 'INV-250321-797', '2025-03-03', '2025-04-02', '2025-04-02', 786555, 78655, 865210, 8, 4, 4),
(2, 'INV-250321-656', '2025-02-21', '2025-03-23', '2025-03-04', 300916, 30091, 331007, 9, 3, 5),
(3, 'INV-250321-720', '2025-03-13', '2025-04-12', '2025-04-04', 852789, 85278, 938067, 9, 7, 1),
(4, 'INV-250321-614', '2025-02-24', '2025-03-26', '2025-03-17', 640350, 64035, 704385, 2, 10, 2),
(5, 'INV-250321-101', '2025-02-19', '2025-03-21', '2025-03-13', 363276, 36327, 399603, 3, 9, 2);

INSERT INTO payments (id, invoice_id, payment_date, total_amount, transaction_id, payment_method, payment_status)
VALUES
(1, 1, '2025-03-20', 904582, 'TXN-651221', '카드', '실패'),
(2, 2, '2025-03-11', 201751, 'TXN-489943', '수표', '완료'),
(3, 3, '2025-03-17', 552216, 'TXN-290209', '계좌이체', '실패'),
(4, 4, '2025-03-17', 729178, 'TXN-148424', '계좌이체', '실패'),
(5, 5, '2025-03-13', 115850, 'TXN-230371', '수표', '실패');




-- // 통계 데이터 추출용 추가 더미 데이터 // -------------------------------------------------------------------
-- // 통계 데이터 추출용 추가 더미 데이터 // -------------------------------------------------------------------

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (101, 'PRJ-2501-01', '프로젝트 1', '2025-01-01', '2025-01-28', 'R_AND_D', 'SI', '구매관리팀', 12000000, 2);
INSERT INTO purchase_requests (purchase_request_id, request_type, request_name, request_number, request_date, customer, business_department, business_budget, project_id, member_id)
VALUES (201, 'GOODS', '구매 요청 1', 'REQ-2501-01', '2025-01-03', '고객 1', '구매관리팀', 6000000, 101, 2);
INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES (301, '0c4cb788-a5c1-46c6-a', 8, 750000, 6000000, 201);
INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (401, 'BID-2501-01', '입찰공고 1', '2025-01-03', '2025-01-10', 8, 750000, 6000000);
INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(501, 401, 2, '공급업체 2', 750000, 6000000, 600000, 6600000,
'2025-01-03', 1, '2025-01-03', 1, 90, 1, 1, '2025-01-03');
INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(601, 'ORD-2501-01', 401, 501, 301,
2, '공급업체 2', '입찰공고 1', 8, 750000, 6000000, 600000, 6600000, 'system', '2025-01-03', '2025-01-03');

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (102, 'PRJ-2501-02', '프로젝트 2', '2025-02-01', '2025-02-28', 'R_AND_D', 'SI', '구매관리팀', 3000000, 1);
INSERT INTO purchase_requests (purchase_request_id, request_type, request_name, request_number, request_date, customer, business_department, business_budget, project_id, member_id)
VALUES (202, 'GOODS', '구매 요청 2', 'REQ-2501-02', '2025-02-01', '고객 2', '구매관리팀', 1500000, 102, 1);
INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES (302, '0c4cb788-a5c1-46c6-a', 2, 750000, 1500000, 202);
INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (402, 'BID-2501-02', '입찰공고 2', '2025-02-01', '2025-02-08', 2, 750000, 1500000);
INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(502, 402, 1, '공급업체 1', 750000, 1500000, 150000, 1650000,
'2025-02-01', 1, '2025-02-01', 1, 90, 1, 1, '2025-02-01');
INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(602, 'ORD-2501-02', 402, 502, 302,
1, '공급업체 1', '입찰공고 2', 2, 750000, 1500000, 150000, 1650000, 'system', '2025-02-01', '2025-02-01');

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (103, 'PRJ-2501-03', '프로젝트 3', '2025-03-01', '2025-03-28', 'R_AND_D', 'SI', '구매관리팀', 10500000, 1);
INSERT INTO purchase_requests (purchase_request_id, request_type, request_name, request_number, request_date, customer, business_department, business_budget, project_id, member_id)
VALUES (203, 'GOODS', '구매 요청 3', 'REQ-2501-03', '2025-03-26', '고객 3', '구매관리팀', 5250000, 103, 1);
INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES (303, '0c4cb788-a5c1-46c6-a', 7, 750000, 5250000, 203);
INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (403, 'BID-2501-03', '입찰공고 3', '2025-03-26', '2025-04-02', 7, 750000, 5250000);
INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(503, 403, 1, '공급업체 1', 750000, 5250000, 525000, 5775000,
'2025-03-26', 1, '2025-03-26', 1, 90, 1, 1, '2025-03-26');
INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(603, 'ORD-2501-03', 403, 503, 303,
1, '공급업체 1', '입찰공고 3', 7, 750000, 5250000, 525000, 5775000, 'system', '2025-03-26', '2025-03-26');

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (104, 'PRJ-2501-04', '프로젝트 4', '2025-04-01', '2025-04-28', 'R_AND_D', 'SI', '구매관리팀', 1800000, 3);
INSERT INTO purchase_requests (purchase_request_id, request_type, request_name, request_number, request_date, customer, business_department, business_budget, project_id, member_id)
VALUES (204, 'GOODS', '구매 요청 4', 'REQ-2501-04', '2025-04-14', '고객 4', '구매관리팀', 900000, 104, 3);
INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES (304, '36624bbe-afe0-469a-8', 2, 450000, 900000, 204);
INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (404, 'BID-2501-04', '입찰공고 4', '2025-04-14', '2025-04-21', 2, 450000, 900000);
INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(504, 404, 3, '공급업체 3', 450000, 900000, 90000, 990000,
'2025-04-14', 1, '2025-04-14', 1, 90, 1, 1, '2025-04-14');
INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(604, 'ORD-2501-04', 404, 504, 304,
3, '공급업체 3', '입찰공고 4', 2, 450000, 900000, 90000, 990000, 'system', '2025-04-14', '2025-04-14');

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (105, 'PRJ-2501-05', '프로젝트 5', '2025-05-01', '2025-05-28', 'R_AND_D', 'SI', '구매관리팀', 12000000, 5);
INSERT INTO purchase_requests (purchase_request_id, request_type, request_name, request_number, request_date, customer, business_department, business_budget, project_id, member_id)
VALUES (205, 'GOODS', '구매 요청 5', 'REQ-2501-05', '2025-05-06', '고객 5', '구매관리팀', 6000000, 105, 5);
INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES (305, '0c4cb788-a5c1-46c6-a', 8, 750000, 6000000, 205);
INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (405, 'BID-2501-05', '입찰공고 5', '2025-05-06', '2025-05-13', 8, 750000, 6000000);
INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(505, 405, 5, '공급업체 5', 750000, 6000000, 600000, 6600000,
'2025-05-06', 1, '2025-05-06', 1, 90, 1, 1, '2025-05-06');
INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(605, 'ORD-2501-05', 405, 505, 305,
5, '공급업체 5', '입찰공고 5', 8, 750000, 6000000, 600000, 6600000, 'system', '2025-05-06', '2025-05-06');

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (106, 'PRJ-2501-06', '프로젝트 6', '2025-06-01', '2025-06-28', 'R_AND_D', 'SI', '구매관리팀', 27000000, 1);
INSERT INTO purchase_requests (purchase_request_id, request_type, request_name, request_number, request_date, customer, business_department, business_budget, project_id, member_id)
VALUES (206, 'GOODS', '구매 요청 6', 'REQ-2501-06', '2025-06-01', '고객 6', '구매관리팀', 13500000, 106, 1);
INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES (306, 'c0115fdb-139c-4021-b', 9, 1500000, 13500000, 206);
INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (406, 'BID-2501-06', '입찰공고 6', '2025-06-01', '2025-06-08', 9, 1500000, 13500000);
INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(506, 406, 1, '공급업체 1', 1500000, 13500000, 1350000, 14850000,
'2025-06-01', 1, '2025-06-01', 1, 90, 1, 1, '2025-06-01');
INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(606, 'ORD-2501-06', 406, 506, 306,
1, '공급업체 1', '입찰공고 6', 9, 1500000, 13500000, 1350000, 14850000, 'system', '2025-06-01', '2025-06-01');

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (107, 'PRJ-2501-07', '프로젝트 7', '2025-07-01', '2025-07-28', 'R_AND_D', 'SI', '구매관리팀', 7200000, 1);
INSERT INTO purchase_requests (purchase_request_id, request_type, request_name, request_number, request_date, customer, business_department, business_budget, project_id, member_id)
VALUES (207, 'GOODS', '구매 요청 7', 'REQ-2501-07', '2025-07-17', '고객 7', '구매관리팀', 3600000, 107, 1);
INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES (307, '36624bbe-afe0-469a-8', 8, 450000, 3600000, 207);
INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (407, 'BID-2501-07', '입찰공고 7', '2025-07-17', '2025-07-24', 8, 450000, 3600000);
INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(507, 407, 1, '공급업체 1', 450000, 3600000, 360000, 3960000,
'2025-07-17', 1, '2025-07-17', 1, 90, 1, 1, '2025-07-17');
INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(607, 'ORD-2501-07', 407, 507, 307,
1, '공급업체 1', '입찰공고 7', 8, 450000, 3600000, 360000, 3960000, 'system', '2025-07-17', '2025-07-17');

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (108, 'PRJ-2501-08', '프로젝트 8', '2025-08-01', '2025-08-28', 'R_AND_D', 'SI', '구매관리팀', 900000, 2);
INSERT INTO purchase_requests (purchase_request_id, request_type, request_name, request_number, request_date, customer, business_department, business_budget, project_id, member_id)
VALUES (208, 'GOODS', '구매 요청 8', 'REQ-2501-08', '2025-08-10', '고객 8', '구매관리팀', 450000, 108, 2);
INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES (308, '36624bbe-afe0-469a-8', 1, 450000, 450000, 208);
INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (408, 'BID-2501-08', '입찰공고 8', '2025-08-10', '2025-08-17', 1, 450000, 450000);
INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(508, 408, 2, '공급업체 2', 450000, 450000, 45000, 495000,
'2025-08-10', 1, '2025-08-10', 1, 90, 1, 1, '2025-08-10');
INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(608, 'ORD-2501-08', 408, 508, 308,
2, '공급업체 2', '입찰공고 8', 1, 450000, 450000, 45000, 495000, 'system', '2025-08-10', '2025-08-10');

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (109, 'PRJ-2501-09', '프로젝트 9', '2025-09-01', '2025-09-28', 'R_AND_D', 'SI', '구매관리팀', 60000, 5);
INSERT INTO purchase_requests (purchase_request_id, request_type, request_name, request_number, request_date, customer, business_department, business_budget, project_id, member_id)
VALUES (209, 'GOODS', '구매 요청 9', 'REQ-2501-09', '2025-09-15', '고객 9', '구매관리팀', 30000, 109, 5);
INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES (309, '5667f656-653b-4f09-9', 2, 15000, 30000, 209);
INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (409, 'BID-2501-09', '입찰공고 9', '2025-09-15', '2025-09-22', 2, 15000, 30000);
INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(509, 409, 5, '공급업체 5', 15000, 30000, 3000, 33000,
'2025-09-15', 1, '2025-09-15', 1, 90, 1, 1, '2025-09-15');
INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(609, 'ORD-2501-09', 409, 509, 309,
5, '공급업체 5', '입찰공고 9', 2, 15000, 30000, 3000, 33000, 'system', '2025-09-15', '2025-09-15');

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (110, 'PRJ-2501-10', '프로젝트 10', '2025-10-01', '2025-10-28', 'R_AND_D', 'SI', '구매관리팀', 4200000, 1);
INSERT INTO purchase_requests (purchase_request_id, request_type, request_name, request_number, request_date, customer, business_department, business_budget, project_id, member_id)
VALUES (210, 'GOODS', '구매 요청 10', 'REQ-2501-10', '2025-10-06', '고객 10', '구매관리팀', 2100000, 110, 1);
INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES (310, 'a44be502-7d37-49f7-b', 7, 300000, 2100000, 210);
INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (410, 'BID-2501-10', '입찰공고 10', '2025-10-06', '2025-10-13', 7, 300000, 2100000);
INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(510, 410, 1, '공급업체 1', 300000, 2100000, 210000, 2310000,
'2025-10-06', 1, '2025-10-06', 1, 90, 1, 1, '2025-10-06');
INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(610, 'ORD-2501-10', 410, 510, 310,
1, '공급업체 1', '입찰공고 10', 7, 300000, 2100000, 210000, 2310000, 'system', '2025-10-06', '2025-10-06');

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (111, 'PRJ-2501-11', '프로젝트 11', '2025-11-01', '2025-11-28', 'R_AND_D', 'SI', '구매관리팀', 900000, 3);
INSERT INTO purchase_requests (purchase_request_id, request_type, request_name, request_number, request_date, customer, business_department, business_budget, project_id, member_id)
VALUES (211, 'GOODS', '구매 요청 11', 'REQ-2501-11', '2025-11-27', '고객 11', '구매관리팀', 450000, 111, 3);
INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES (311, '36624bbe-afe0-469a-8', 1, 450000, 450000, 211);
INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (411, 'BID-2501-11', '입찰공고 11', '2025-11-27', '2025-12-04', 1, 450000, 450000);
INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(511, 411, 3, '공급업체 3', 450000, 450000, 45000, 495000,
'2025-11-27', 1, '2025-11-27', 1, 90, 1, 1, '2025-11-27');
INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(611, 'ORD-2501-11', 411, 511, 311,
3, '공급업체 3', '입찰공고 11', 1, 450000, 450000, 45000, 495000, 'system', '2025-11-27', '2025-11-27');

INSERT INTO projects (id, project_identifier, project_name, start_date, end_date, budget_code, business_category, request_department, total_budget, requester_id)
VALUES (112, 'PRJ-2501-12', '프로젝트 12', '2025-12-01', '2025-12-28', 'R_AND_D', 'SI', '구매관리팀', 270000, 5);
INSERT INTO purchase_requests (purchase_request_id, request_type, request_name, request_number, request_date, customer, business_department, business_budget, project_id, member_id)
VALUES (212, 'GOODS', '구매 요청 12', 'REQ-2501-12', '2025-12-04', '고객 12', '구매관리팀', 135000, 112, 5);
INSERT INTO purchase_request_items (purchase_request_item_id, item_id, quantity, unit_price, total_price, purchase_request_id)
VALUES (312, '5667f656-653b-4f09-9', 9, 15000, 135000, 212);
INSERT INTO biddings (id, bid_number, title, start_date, end_date, quantity, unit_price, total_amount)
VALUES (412, 'BID-2501-12', '입찰공고 12', '2025-12-04', '2025-12-11', 9, 15000, 135000);
INSERT INTO bidding_participations (
id, bidding_id, supplier_id, company_name, unit_price, supply_price, vat, total_amount,
submitted_at, is_confirmed, confirmed_at, is_evaluated, evaluation_score, is_order_created,
is_selected_bidder, selected_at
) VALUES
(512, 412, 5, '공급업체 5', 15000, 135000, 13500, 148500,
'2025-12-04', 1, '2025-12-04', 1, 90, 1, 1, '2025-12-04');
INSERT INTO bidding_orders (
id, order_number, bidding_id, bidding_participation_id, purchase_request_item_id,
supplier_id, supplier_name, title, quantity, unit_price, supply_price, vat, total_amount, created_by, reg_time, update_time
) VALUES
(612, 'ORD-2501-12', 412, 512, 312,
5, '공급업체 5', '입찰공고 12', 9, 15000, 135000, 13500, 148500, 'system', '2025-12-04', '2025-12-04');



-- // 통계 데이터 추출 조회 쿼리문 //-------------------------------------------------------------------------

select date_format(bo1_0.reg_time,'%Y-%m'),count(bo1_0.id),sum(bo1_0.total_amount)
from bidding_orders bo1_0
where bo1_0.reg_time between '2025-01-01 00:00:00.000' and '2025-12-31 23:59:59.000'
group by date_format(bo1_0.reg_time,'%Y-%m')
order by 1;


