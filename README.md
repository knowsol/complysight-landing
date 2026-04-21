# ComplySight Landing Page

공공기관 정보시스템 예방점검 자동화 솔루션 소개 페이지

## 로컬 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 배포 (Vercel)

1. GitHub에 레포 푸시
2. Vercel에서 레포 import
3. Framework Preset: **Vite** 자동 감지
4. Deploy 클릭

## 커스텀 도메인 연결 (complysight.knowwhere.kr)

### Vercel 대시보드에서

1. Project Settings → Domains → Add
2. `complysight.knowwhere.kr` 입력
3. Vercel이 알려주는 DNS 레코드 확인
   - Type: `CNAME`
   - Name: `complysight`
   - Value: `cname.vercel-dns.com`

### 도메인 등록 업체(가비아 등)에서

1. knowwhere.kr 도메인 DNS 관리 페이지 접속
2. 레코드 추가:
   - 호스트명: `complysight`
   - 타입: `CNAME`
   - 값: `cname.vercel-dns.com`
   - TTL: `3600` (기본값)
3. 저장 후 5분 ~ 48시간 내 DNS 전파

### 확인

- DNS 전파 완료 후 `https://complysight.knowwhere.kr` 접속
- Vercel이 자동으로 SSL 인증서 발급
