import React from 'react';
import {
  ArrowRight, Check, ChevronRight, Shield, ShieldCheck, Clock, FileCheck, FileText,
  Database, Bell, Users, BarChart3, Building2, Factory, Landmark, Stethoscope,
  ArrowUpRight, Circle, Layers, Workflow, RefreshCcw, Target, Award, Lock,
  FileSearch, TrendingUp, Gauge, BookCheck, Server, Network, HardDrive
} from 'lucide-react';

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=JetBrains+Mono:wght@400;500&display=swap');
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');

        :root {
          --navy: #0B1F3A;
          --navy-2: #15294A;
          --brand: #1E40AF;
          --brand-2: #2563EB;
          --brand-light: #DBEAFE;
          --accent: #059669;
          --accent-light: #D1FAE5;
          --bg: #FAFAF7;
          --bg-alt: #F1F5F9;
          --bg-subtle: #F8FAFC;
          --text: #0F172A;
          --muted: #64748B;
          --border: #E2E8F0;
        }

        .cs-root {
          font-family: 'Pretendard Variable', Pretendard, -apple-system, sans-serif;
          background: var(--bg);
          color: var(--text);
          -webkit-font-smoothing: antialiased;
        }

        .font-serif { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }

        .hero-radial {
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30, 64, 175, 0.08), transparent 60%);
        }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

        .fade-up-1 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.0s both; }
        .fade-up-2 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
        .fade-up-3 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }
        .fade-up-4 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }
        .pulse-dot { animation: pulse-dot 2.4s ease-in-out infinite; }

        .btn-primary {
          background: var(--navy);
          color: white;
          transition: all 0.2s ease;
        }
        .btn-primary:hover {
          background: var(--navy-2);
          transform: translateY(-1px);
          box-shadow: 0 10px 30px -10px rgba(11, 31, 58, 0.4);
        }
        .btn-ghost {
          border: 1px solid var(--border);
          transition: all 0.2s ease;
        }
        .btn-ghost:hover {
          border-color: var(--navy);
          background: white;
        }

        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 500;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px -20px rgba(11, 31, 58, 0.12);
          border-color: #cbd5e1;
        }
      `}</style>

      <div className="cs-root min-h-screen">

        {/* =========== NAVIGATION =========== */}
        <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: 'var(--navy)' }}>
                <Circle className="w-3.5 h-3.5 text-white" fill="white" strokeWidth={0} />
              </div>
              <span className="font-semibold tracking-tight text-[17px]" style={{ color: 'var(--navy)' }}>COMPLYSIGHT</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
              <a className="hover:text-slate-900 transition">솔루션</a>
              <a className="hover:text-slate-900 transition">기능</a>
              <a className="hover:text-slate-900 transition">도입 효과</a>
              <a className="hover:text-slate-900 transition">자료실</a>
              <a className="hover:text-slate-900 transition">문의</a>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn-ghost px-4 py-2 text-sm rounded-md hidden sm:block">로그인</button>
              <button className="btn-primary px-4 py-2 text-sm rounded-md flex items-center gap-1.5">
                도입 문의 <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </nav>

        {/* =========== §1 HERO =========== */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 hero-radial" />

          <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: Text */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-600 fade-up-1">
                  <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--accent)' }} />
                  <span>행정안전부 정보시스템 예방점검 기준 기반</span>
                </div>

                <h1 className="mt-8 text-xl md:text-2xl leading-snug tracking-tight font-semibold fade-up-2" style={{ color: 'var(--navy)' }}>
                  데이터 <span className="font-serif italic font-normal" style={{ color: 'var(--brand)' }}>자동수집</span>
                </h1>

                <p className="mt-5 text-xl md:text-2xl font-semibold leading-snug fade-up-3" style={{ color: 'var(--navy)' }}>
                  공공기관 정보시스템 예방점검 자동화 솔루션
                </p>

                <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl fade-up-3">
                  행정안전부 정보시스템 예방점검 기준을 반영하여
                  점검, 증적 관리, 보고서 작성,<br />
                  감사 대응까지 공공기관 예방점검 업무 전반을 자동화하는 솔루션입니다.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3 fade-up-4">
                  <button className="btn-primary px-6 py-3.5 rounded-md text-sm font-medium flex items-center gap-2">
                    서비스 소개서 보기 <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="btn-ghost px-6 py-3.5 rounded-md text-sm font-medium bg-white flex items-center gap-2 text-slate-700">
                    도입 문의하기 <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-slate-500 fade-up-4">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                    행정안전부 기준 반영
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                    기관 맞춤 PoC 지원
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                    온프레미스·클라우드 모두 지원
                  </div>
                </div>
              </div>

              {/* Right: Dashboard Mockup */}
              <div className="relative fade-up-4">
                <div className="absolute inset-0 -top-10" style={{
                  background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(30, 64, 175, 0.12), transparent 70%)'
                }} />

                <div className="relative bg-white rounded-xl border border-slate-200 overflow-hidden shadow-[0_40px_100px_-20px_rgba(11,31,58,0.25)]">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-100 bg-slate-50">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-3 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
                        <Shield className="w-2.5 h-2.5" style={{ color: 'var(--accent)' }} />
                        complysight.kr/dashboard
                      </div>
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="p-5 bg-slate-50/30">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-[9px] font-mono text-slate-400 tracking-wider">MAIN DASHBOARD</div>
                        <div className="text-sm font-semibold text-slate-900 mt-0.5">예방점검 통합 현황</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--accent)' }} />
                        실시간 수집 중
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[
                        { n: '142', l: '점검 대상', c: 'var(--navy)' },
                        { n: '98.2%', l: '자동 수집률', c: 'var(--brand)' },
                        { n: '1,284', l: '금일 수집', c: 'var(--accent)' },
                        { n: '08', l: '검토 필요', c: '#DC2626' },
                      ].map((s, i) => (
                        <div key={i} className="rounded-lg p-2.5 border border-slate-100 bg-white">
                          <div className="text-lg font-semibold font-mono leading-none" style={{ color: s.c }}>{s.n}</div>
                          <div className="text-[9px] text-slate-500 mt-1">{s.l}</div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-lg border border-slate-100 p-3 bg-white mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-[10px] font-semibold text-slate-700">일자별 점검 추이</div>
                        <div className="text-[9px] font-mono text-slate-400">최근 14일</div>
                      </div>
                      <div className="h-16 flex items-end gap-1">
                        {[40, 55, 48, 72, 65, 70, 78, 62, 75, 82, 68, 88, 78, 92].map((h, i) => (
                          <div key={i} className="flex-1 rounded-sm" style={{
                            height: `${h}%`,
                            background: i >= 10 ? 'var(--brand)' : 'rgba(37, 99, 235, 0.25)'
                          }} />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg border border-slate-100 p-3 bg-white">
                      <div className="text-[10px] font-semibold text-slate-700 mb-2">최근 점검 항목</div>
                      <div className="space-y-1.5">
                        {[
                          { t: 'WEB-0142 · Apache 2.4', s: '정상', c: 'var(--accent)' },
                          { t: 'WAS-0087 · Tomcat 9', s: '수집 중', c: 'var(--brand)' },
                          { t: 'DB-0031 · Oracle 19c', s: '검토 필요', c: '#DC2626' },
                        ].map((r, i) => (
                          <div key={i} className="flex items-center justify-between py-0.5 text-[10px]">
                            <span className="font-mono text-slate-600">{r.t}</span>
                            <span className="font-medium" style={{ color: r.c }}>● {r.s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========== §2 PROBLEM =========== */}
        <section className="py-32" style={{ background: 'var(--bg-alt)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]" style={{ color: 'var(--navy)' }}>
                예방점검 업무, 아직도<br />
                <span className="font-serif italic font-normal text-slate-500">수작업</span>으로 관리하고 계신가요?
              </h2>
              <p className="mt-8 text-slate-600 leading-relaxed text-lg">
                매번 반복되는 예방점검 업무,<br />
                흩어진 자료와 반복되는 수작업은 담당자의 시간을 소모하고,
                결정적인 순간마다 리스크로 돌아옵니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: Layers,
                  t: '시스템별 자료 분산',
                  d: '점검 자료가 서버, DB, 보안 솔루션, 담당자 PC에 흩어져 있습니다. 필요할 때마다 수집부터 다시 시작해야 합니다.',
                  impact: '담당자 간 인수인계 시 자료 누락 빈번',
                },
                {
                  icon: FileText,
                  t: '수기 점검의 한계',
                  d: '화면 캡처, 엑셀 작성, 수기 체크리스트에 의존하다 보니 점검자마다 기준과 방식이 달라지고 증적의 재현성이 떨어집니다.',
                  impact: 'Human Error · 기준 편차 발생',
                },
                {
                  icon: RefreshCcw,
                  t: '반복되는 보고서 작성',
                  d: '월간·분기·감사 보고서를 매번 처음부터 수작업으로 작성합니다. 담당자 한 명이 며칠씩 매달려야 하는 비효율이 반복됩니다.',
                  impact: '본래 기획·개선 업무 집중 불가',
                },
                {
                  icon: FileSearch,
                  t: '이력 추적의 어려움',
                  d: '누가, 언제, 어떤 기준으로 점검했는지 이력을 추적하기 어렵습니다. 감사 시 근거 자료를 찾느라 시간을 허비합니다.',
                  impact: '감사·사후 대응 시 리스크',
                },
              ].map((p, i) => (
                <div key={i} className="card-hover p-8 bg-white border border-slate-200 rounded-xl">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--bg-alt)' }}>
                      <p.icon className="w-5 h-5" style={{ color: 'var(--navy)' }} strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-slate-900">{p.t}</div>
                      <div className="mt-2 text-sm text-slate-600 leading-relaxed">{p.d}</div>
                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-red-500" />
                        <span className="text-xs text-slate-500 font-medium">{p.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========== §3 SOLUTION (해결 방식) =========== */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.3]" style={{ color: 'var(--navy)' }}>
                개별·수동 관리에서 <span style={{ color: 'var(--brand)' }}>통합·자동 관리</span>로
              </h2>
              <p className="mt-8 text-slate-600 leading-relaxed text-lg">
                컴플리사이트는 기존의 개별 수작업 중심 점검 방식을 벗어나,<br />
                <strong className="font-semibold text-slate-900">점검 기준 설정부터 리포트 생성까지 전 과정을 자동화</strong>합니다.
              </p>
              <p className="mt-6 text-slate-600 leading-relaxed text-lg">
                운영 효율성과 점검 정확도를 동시에 높이는<br />
                <strong className="font-semibold text-slate-900">통합 예방점검 관리체계</strong>를 구현합니다.
              </p>
            </div>

            {/* Before / After Comparison */}
            <div className="max-w-5xl mx-auto">

              {/* BEFORE — 5 columns aligned with AFTER; merged items stacked vertically */}
              <div>
                <div className="mb-4 text-xs font-mono tracking-wider text-slate-400">
                  BEFORE · 개별 관리 · 수동 관리
                </div>
                <div className="grid grid-cols-5 gap-3 items-end">
                  {[
                    ['기준 해석'],
                    ['수동 점검'],
                    ['수기 분석', '수치 모니터링'],
                    ['엑셀 편집', '수기 보고'],
                    ['수동 조치', '이력 추적'],
                  ].map((col, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      {col.map((t, j) => (
                        <div key={j} className="px-3 py-2.5 rounded border border-slate-200 bg-white text-center">
                          <div className="text-[11px] text-slate-500 truncate">{t}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Down arrows — one per column */}
              <div className="grid grid-cols-5 gap-3 my-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex justify-center text-slate-300">
                    <svg width="16" height="22" viewBox="0 0 16 22" aria-hidden="true">
                      <path d="M8 2 L8 18 M4 14 L8 18 L12 14" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* AFTER — 5 columns matching BEFORE columns 1:1 */}
              <div>
                <div className="mb-4 text-xs font-mono tracking-wider" style={{ color: 'var(--brand)' }}>
                  AFTER · 통합 관리 · 자동 관리
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {[
                    { t: '기준 내재화', icon: BookCheck, auto: true },
                    { t: '데이터 확보', icon: Database, auto: true },
                    { t: '상태 판별', icon: Gauge, auto: true },
                    { t: '리포트 생성', icon: FileSearch, auto: false },
                    { t: '점검 이력 자동 기록', icon: FileCheck, auto: true },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-lg p-4 flex items-center gap-2.5"
                      style={{
                        background: s.auto ? 'var(--brand)' : 'white',
                        border: s.auto ? 'none' : '1.5px solid #CBD5E1',
                        color: s.auto ? 'white' : 'inherit',
                      }}
                    >
                      <s.icon className="w-5 h-5 shrink-0" strokeWidth={1.75} style={{ color: s.auto ? 'white' : '#64748B' }} />
                      <div className="min-w-0">
                        <div className={`text-sm font-semibold leading-tight ${s.auto ? '' : 'text-slate-900'}`}>{s.t}</div>
                        <div className={`text-[10px] font-mono mt-0.5 ${s.auto ? 'opacity-70' : 'text-slate-400'}`}>
                          {s.auto ? 'AUTO' : '담당자'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emphasized Summary - below After */}
              <div className="mt-14 flex flex-wrap items-baseline justify-center gap-x-8 gap-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl md:text-5xl font-mono font-light text-slate-300 line-through">8</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" style={{ color: 'var(--brand)' }}>
                    <path d="M4 10 L16 10 M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                  <span className="text-5xl md:text-6xl font-serif font-semibold leading-none" style={{ color: 'var(--brand)' }}>5단계</span>
                </div>
                <div className="w-px h-10 bg-slate-200 hidden md:block" />
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl md:text-6xl font-serif font-semibold leading-none" style={{ color: 'var(--brand)' }}>80%</span>
                  <span className="text-base text-slate-600">자동화</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========== §4 FEATURES =========== */}
        <section className="py-32" style={{ background: 'var(--bg-alt)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]" style={{ color: 'var(--navy)' }}>
                컴플리사이트 도입,<br />
                <span className="font-serif italic font-normal">실질적 업무 효율</span>을 가져옵니다.
              </h2>
              <p className="mt-8 text-slate-600 leading-relaxed text-lg">
                컴플리사이트의 네 가지 핵심 기능은 각각 구체적인 업무 변화를 만들어냅니다.
              </p>
            </div>

            {/* Two-column offset layout */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left column */}
              <div className="flex flex-col gap-6">
                {/* 01 데이터 자동 확보 */}
                <div className="bg-white border border-slate-200 rounded-xl p-8 card-hover">
                  <div className="flex items-start justify-between mb-6">
                    <div className="font-mono text-2xl font-semibold" style={{ color: 'var(--brand)' }}>01</div>
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#E2E8F0" strokeWidth="2.5" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeDasharray="95, 100" strokeLinecap="round" pathLength="100" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-[12px] font-bold" style={{ color: 'var(--brand)' }}>95%</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 tracking-tight">데이터 자동 확보</h3>
                  <div className="mt-1 text-xs font-mono tracking-wider text-slate-400">자동 수집률</div>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      'Web·WAS·DB·Server 등 주요 자원으로부터 데이터 자동 확보',
                      '점검 대상별 수집 항목 및 주기 설정 가능',
                      '보고서 제출율·수집 커버리지·유효 증적 충족율 등 시각화 자료 제공',
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--brand)' }} />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 03 상태 자동 판별 */}
                <div className="bg-white border border-slate-200 rounded-xl p-8 card-hover">
                  <div className="flex items-start justify-between mb-6">
                    <div className="font-mono text-2xl font-semibold" style={{ color: 'var(--brand)' }}>03</div>
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#E2E8F0" strokeWidth="2.5" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeDasharray="90, 100" strokeLinecap="round" pathLength="100" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-[12px] font-bold" style={{ color: 'var(--brand)' }}>90%</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 tracking-tight">상태 자동 판별</h3>
                  <div className="mt-1 text-xs font-mono tracking-wider text-slate-400">자동 판별률</div>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      '검증 Code 기준에 따라 수집 데이터의 정상·비정상 여부 자동 분석',
                      'CPU·Memory·Connection Pool 등 주요 성능 항목에 대한 임계값 판단',
                      '장애 감지 시 관리자 알림',
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--brand)' }} />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right column - offset down */}
              <div className="flex flex-col gap-6 md:mt-20">
                {/* 02 보고서 자동 생성 */}
                <div className="bg-white border border-slate-200 rounded-xl p-8 card-hover">
                  <div className="flex items-start justify-between mb-6">
                    <div className="font-mono text-2xl font-semibold" style={{ color: 'var(--brand)' }}>02</div>
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#E2E8F0" strokeWidth="2.5" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeDasharray="100, 100" strokeLinecap="round" pathLength="100" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-[11px] font-bold" style={{ color: 'var(--brand)' }}>100%</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 tracking-tight">보고서 자동 생성</h3>
                  <div className="mt-1 text-xs font-mono tracking-wider text-slate-400">자동 생성률</div>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      '일·주·월 단위 정기 운영 리포트 및 감사 대응 보고서 자동 생성',
                      '점검 결과 및 증적 리포팅 생성 (직접 점검·배치 점검 선택)',
                      '공공 표준 예방점검 절차에 부합한 보고서 포맷 지원',
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--brand)' }} />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 04 통합 대시보드 */}
                <div className="bg-white border border-slate-200 rounded-xl p-8 card-hover">
                  <div className="flex items-start justify-between mb-6">
                    <div className="font-mono text-2xl font-semibold" style={{ color: 'var(--brand)' }}>04</div>
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-subtle)' }}>
                      <BarChart3 className="w-5 h-5" style={{ color: 'var(--navy)' }} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 tracking-tight">통합 대시보드 및 이력 관리</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    흩어진 점검 정보를 하나의 대시보드에서 관리하고, 모든 점검 활동은 타임스탬프와 함께 이력으로 자동 보관됩니다.
                  </p>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="eyebrow">업무상 효과</div>
                    <div className="mt-2 font-semibold text-slate-900">감사·사후 대응 시간 단축</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========== §5 OPERATIONS (운영 구조) =========== */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-5xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15]" style={{ color: 'var(--navy)', wordBreak: 'keep-all' }}>
                입력부터, 처리, 결과 보고까지<br />
                흩어진 점검 정보를 <span className="font-serif italic font-normal whitespace-nowrap">하나로 통합</span>하였습니다.
              </h2>
            </div>

            <div className="flex items-stretch gap-0 -mx-2">

              {/* INPUT - 화살표 모양 (뒤가 직선, 앞이 뾰족) */}
              <div
                className="flex-1"
                style={{
                  filter: 'drop-shadow(0 0 0 #E2E8F0) drop-shadow(0 0 1px #E2E8F0) drop-shadow(0 0 1px #E2E8F0)',
                }}
              >
                <div
                  className="relative h-full"
                  style={{
                    background: 'white',
                    clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%)',
                    padding: '32px 64px 32px 32px',
                  }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <div className="px-2.5 py-1 rounded font-mono text-[10px] font-bold tracking-wider text-white" style={{ background: 'var(--navy)' }}>
                      INPUT
                    </div>
                    <div className="eyebrow" style={{ marginTop: 0 }}>입력 데이터</div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-5">점검 기준 · 시스템 정보</h3>
                  <ul className="space-y-3">
                    {[
                      { icon: Server, t: '시스템 구성 정보', d: '자산 대장·네트워크 구조' },
                      { icon: Database, t: '서버·DB·WAS 설정값', d: '실시간 수집 대상' },
                      { icon: Shield, t: '점검 기준', d: '행정안전부·기관 고유' },
                      { icon: Network, t: '운영 환경 정보', d: '보안 정책·권한 구조' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                        <item.icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--navy)' }} strokeWidth={1.75} />
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{item.t}</div>
                          <div className="text-xs text-slate-500">{item.d}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* PROCESS - 쉐브론 모양 (뒤도 오목, 앞도 뾰족) */}
              <div className="flex-1 -ml-5 relative z-10">
                <div
                  className="relative text-white h-full"
                  style={{
                    background: 'var(--navy)',
                    clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%, 40px 50%)',
                    padding: '32px 64px 32px 64px',
                  }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <div className="px-2.5 py-1 rounded font-mono text-[10px] font-bold tracking-wider" style={{ background: 'var(--brand-2)', color: 'white' }}>
                      PROCESS
                    </div>
                    <div className="font-mono text-[11px] tracking-wider uppercase text-slate-400">처리 로직</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-5">자동화된 점검 엔진</h3>
                  <div className="space-y-3">
                    {[
                      { t: '기준 기반 비교', d: '수집 데이터를 사전 정의된 기준과 자동 대조' },
                      { t: '항목별 자동 판별', d: '정상·주의·위험 상태를 시스템이 분류' },
                      { t: '결과 통합', d: '시스템·기간·담당자 단위로 결과 집계' },
                      { t: '예외 검토 플래그', d: '판단이 필요한 항목만 담당자에게 전달' },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="text-sm font-semibold">{item.t}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{item.d}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* OUTPUT - 꼬리 모양 (뒤가 오목, 앞이 직선) */}
              <div
                className="flex-1 -ml-5"
                style={{
                  filter: 'drop-shadow(0 0 0 #059669) drop-shadow(0 0 1px #059669) drop-shadow(0 0 1px #059669)',
                }}
              >
                <div
                  className="relative h-full"
                  style={{
                    background: 'white',
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 40px 50%)',
                    padding: '32px 32px 32px 64px',
                  }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <div className="px-2.5 py-1 rounded font-mono text-[10px] font-bold tracking-wider text-white" style={{ background: 'var(--accent)' }}>
                      OUTPUT
                    </div>
                    <div className="eyebrow" style={{ marginTop: 0 }}>결과물</div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-5">신뢰 가능한 산출물</h3>
                  <ul className="space-y-3">
                    {[
                      { icon: FileCheck, t: '점검 결과 리포트', d: '표준 양식 · 자동 생성' },
                      { icon: Layers, t: '항목별 증빙', d: '원천 데이터 포함' },
                      { icon: Clock, t: '이력 로그', d: '타임스탬프 기록' },
                      { icon: BarChart3, t: '관리 대시보드', d: '실시간 현황 집계' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'var(--accent-light)' }}>
                        <item.icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} strokeWidth={1.75} />
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{item.t}</div>
                          <div className="text-xs text-slate-600">{item.d}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========== §5.5 PRODUCTS (Manager × Sentinel) =========== */}
        <section className="py-32" style={{ background: 'var(--bg-alt)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]" style={{ color: 'var(--navy)' }}>
                점검보고, 보고확인.<br />
                <span className="font-serif italic font-normal">보고자와 관리자 모두</span><br />
                하나의 시스템으로.
              </h2>
              <p className="mt-8 text-slate-600 leading-relaxed text-lg">
                컴플리사이트는 현장에서 데이터를 수집하는 Sentinel과
                관리자가 결과를 운영하는 Manager,<br />
                두 제품이 실시간으로 연결된 통합 솔루션입니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              {/* MANAGER */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-2.5 py-1 rounded font-mono text-[10px] font-bold tracking-wider text-white" style={{ background: 'var(--brand)' }}>
                    MANAGER
                  </div>
                  <div className="eyebrow" style={{ marginTop: 0 }}>통합 관리 · 대시보드</div>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug" style={{ color: 'var(--navy)' }}>
                  점검 기준을 내재화하고<br />결과를 한눈에.
                </h3>

                <p className="mt-5 text-slate-600 leading-relaxed">
                  행정안전부 예방점검 기준과 기관 고유 기준을 시스템에 내재화하고,
                  Sentinel이 수집한 데이터를 기준과 자동 대조하여
                  상태 판별, 대시보드 시각화, 보고서 생성까지 한 화면에서 처리합니다.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    '행정안전부 기준·기관 커스텀 룰 내재화',
                    '상태 자동 판별 및 대시보드 시각화',
                    '정기·감사 보고서 자동 생성',
                    '기관·부서·직무별 권한 관리',
                  ].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                      <Check className="w-4 h-4 shrink-0" style={{ color: 'var(--brand)' }} strokeWidth={2.5} />
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <div className="eyebrow">FOR</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">관리자 · 감사 담당</div>
                </div>
              </div>

              {/* SENTINEL */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-2.5 py-1 rounded font-mono text-[10px] font-bold tracking-wider text-white" style={{ background: 'var(--accent)' }}>
                    SENTINEL
                  </div>
                  <div className="eyebrow" style={{ marginTop: 0 }}>자동 수집 · 증적 관리</div>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug" style={{ color: 'var(--navy)' }}>
                  주요 시스템에서<br />데이터를 자동 수집합니다.
                </h3>

                <p className="mt-5 text-slate-600 leading-relaxed">
                  Sentinel Agent가 Web·WAS·DB·Server 등 주요 시스템 자원에 접근하여
                  점검 항목별 데이터를 자동 수집하고, 원천 증적까지 함께 보관합니다.
                  사람이 캡처·기록하지 않아도 감사 근거가 자동으로 쌓입니다.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    'Web·WAS·DB·Server 자동 데이터 수집',
                    '점검 기준에 따른 상태 자동 판별',
                    '원천 증적 타임스탬프 자동 보관',
                    '예약·즉시 실행 유연한 스케줄링',
                  ].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                      <Check className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} strokeWidth={2.5} />
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <div className="eyebrow">FOR</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">운영 환경 상주</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========== §6 EFFECTS (도입 효과) =========== */}
        <section className="py-32" style={{ background: 'var(--navy)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-white" style={{ wordBreak: 'keep-all' }}>
                도입 이후,<br />
                <span className="font-serif italic font-normal text-slate-400">달라진 예방점검 업무</span>를 확인하세요.
              </h2>
              <p className="mt-8 text-slate-300 leading-relaxed text-lg max-w-2xl">
                단순한 기능 도입이 아니라, 조직의 예방점검 운영 체계 자체가 바뀝니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: RefreshCcw, t: '반복 업무 감소', d: '수집·분석·보고서 작성 등 반복되던 수작업이 자동화됩니다.' },
                { icon: Target, t: '점검 정확도 향상', d: 'Human Error가 제거되고, 시스템이 동일 기준으로 판단합니다.' },
                { icon: Layers, t: '관리 일원화', d: '흩어진 점검 정보가 하나의 대시보드에서 일원화됩니다.' },
                { icon: ShieldCheck, t: '감사·사후 대응 용이', d: '이력과 증적이 자동 보관되어 언제든 즉시 제시할 수 있습니다.' },
                { icon: BookCheck, t: '업무 표준화', d: '담당자가 바뀌어도 동일한 기준과 절차로 점검이 이어집니다.' },
                { icon: TrendingUp, t: '본질 업무 집중', d: '담당자는 결과 검토와 개선 기획 등 본질적 업무에 집중합니다.' },
              ].map((e, i) => (
                <div key={i} className="p-8 rounded-2xl border border-white/10 transition-all hover:bg-white/[0.03] hover:border-white/20">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-6" style={{ background: 'rgba(37, 99, 235, 0.15)' }}>
                    <e.icon className="w-5 h-5" style={{ color: 'var(--brand-2)' }} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{e.t}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{e.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========== §7 TARGET (추천 대상) =========== */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]" style={{ color: 'var(--navy)' }}>
                  이런 조직에<br />
                  <span className="font-serif italic font-normal">꼭 필요</span>합니다.
                </h2>
                <p className="mt-8 text-slate-600 leading-relaxed max-w-md">
                  예방점검 업무가 반복적이고, 여러 조직에 걸쳐 있고,
                  감사 대응이 필수인 환경이라면
                  컴플리사이트가 즉시 효과를 발휘합니다.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    n: '01',
                    t: '공공기관 정보시스템 운영 조직',
                    d: '행정안전부 기준의 정보시스템 예방점검을 정기적으로 수행해야 하는 중앙행정기관·지자체·공공기관·공기업·출연기관의 IT 운영팀',
                    scenarios: ['행정안전부 기준 대응', '정기 운영 보고', '시스템 자산 실사'],
                  },
                  {
                    n: '02',
                    t: '컴플라이언스·보안·감사 대응 조직',
                    d: '내외부 감사, 경영평가, 인증심사에 반복적으로 대응해야 하는 컴플라이언스·정보보안·내부감사 담당 조직',
                    scenarios: ['감사원 대응', '경영평가 준비', 'ISMS·CSAP 대응'],
                  },
                  {
                    n: '03',
                    t: '다수 시스템 점검이 필요한 조직',
                    d: '여러 개의 시스템·장비·데이터베이스를 동시에 운영하며 점검 범위가 넓고 업무 부하가 높은 조직',
                    scenarios: ['다중 시스템 운영', '통합 현황 관리', '담당자 분산 환경'],
                  },
                ].map((t, i) => (
                  <div key={i} className="card-hover bg-white border border-slate-200 rounded-xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="font-mono text-xs text-slate-400 pt-1.5">{t.n}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900">{t.t}</h3>
                        <p className="mt-3 text-slate-600 leading-relaxed">{t.d}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {t.scenarios.map((s, si) => (
                            <span key={si} className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'var(--bg-alt)', color: 'var(--navy)' }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========== §9 CTA =========== */}
        <section className="py-32 relative overflow-hidden" style={{ background: 'var(--navy)' }}>
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(30, 64, 175, 0.25), transparent 70%)'
          }} />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-white">
              예방점검 업무를<br />
              더 <span className="font-serif italic font-normal" style={{ color: 'var(--brand-2)' }}>정확하고 효율적</span>으로<br />
              운영하고 싶다면,
            </h2>
            <p className="mt-8 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              컴플리사이트를 확인해보세요.<br />
              기관 환경에 맞춘 맞춤형 데모로 어떤 변화가 가능한지 직접 확인하실 수 있습니다.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <button className="px-7 py-4 bg-white text-slate-900 rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-slate-100 transition">
                도입 문의하기 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* =========== FOOTER =========== */}
        <footer className="bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: 'var(--navy)' }}>
                    <Circle className="w-3.5 h-3.5 text-white" fill="white" strokeWidth={0} />
                  </div>
                  <span className="font-semibold tracking-tight text-[17px]" style={{ color: 'var(--navy)' }}>COMPLYSIGHT</span>
                </div>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-sm">
                  공공기관·정보시스템 예방점검 업무를 자동화하는 컴플라이언스 솔루션.
                </p>
                <div className="mt-6 text-xs text-slate-500 font-mono">
                  © 2026 Knowwhere Soft. All rights reserved.
                </div>
              </div>
              {[
                { h: '솔루션', l: ['주요 기능', '운영 구조', '도입 효과', '지원 환경'] },
                { h: '자료실', l: ['소개 자료', '도입 사례', '기술 문서', 'FAQ'] },
                { h: '회사', l: ['회사 소개', '파트너', '문의하기', '채용'] },
              ].map((c, i) => (
                <div key={i}>
                  <div className="text-xs font-semibold tracking-wider text-slate-400 font-mono uppercase">{c.h}</div>
                  <ul className="mt-4 space-y-2.5">
                    {c.l.map(item => (
                      <li key={item} className="text-sm text-slate-600 hover:text-slate-900 transition cursor-pointer">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
