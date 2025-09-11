# Chu Fix Pack — og-cover + Favicons

이 패키지는 다음 파일을 포함합니다:
- `/images/og-cover.jpg` (1200×630, 공유 썸네일)
- `favicon.ico`
- `favicon-48x48.png`
- `favicon.svg`
- `apple-touch-icon.png` (180×180, iOS)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `site.webmanifest`

## 적용 방법
1) GitHub 리포지토리 **루트**(= index.html과 같은 위치)에 본 패키지의 파일들을 그대로 업로드/덮어쓰기 합니다.
   - `/images/og-cover.jpg`는 `images` 폴더 안에 들어가도록 유지하세요.
2) `index.html`의 `<head>` 안에 아래 **스니펫**을 추가(또는 기존 og:image/파비콘 태그를 교체)하세요.

---
<!-- === START: Favicons / Open Graph / Manifest === -->
<link rel="canonical" href="https://www.chu-massage.com/"/>

<!-- Open Graph (공유 썸네일) -->
<meta property="og:type" content="website"/>
<meta property="og:title" content="서울·경기·인천 출장마사지 | 츄츄마사지"/>
<meta property="og:description" content="선입금 없음 · 30–60분 배정 · 타이/아로마/힐링 전문"/>
<meta property="og:url" content="https://www.chu-massage.com/"/>
<meta property="og:image" content="https://www.chu-massage.com/images/og-cover.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="서울·경기·인천 출장마사지 | 츄츄마사지"/>
<meta name="twitter:description" content="선입금 없음 · 30–60분 배정 · 타이/아로마/힐링"/>
<meta name="twitter:image" content="https://www.chu-massage.com/images/og-cover.jpg"/>

<!-- Favicons -->
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<!-- === END: Favicons / Open Graph / Manifest === -->

---

3) 커밋 후 1~2분 뒤 사이트 새로고침.
4) **Search Console → URL 검사**에서 https://www.chu-massage.com/ 재크롤 요청.
5) 카톡/페북/트위터에서 링크를 공유해 썸네일이 제대로 뜨는지 확인하세요.
   - 썸네일 캐시는 몇 시간~수일 유지될 수 있습니다.

생성: 2025-09-11T14:30:13.618515
