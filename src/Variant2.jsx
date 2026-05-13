import React from 'react';
import {
  ArrowRight, Check, ChevronRight, Shield, ShieldCheck, Clock, FileCheck, FileText,
  Database, Bell, Users, BarChart3, Building2, Factory, Landmark, Stethoscope,
  ArrowUpRight, Circle, Layers, Workflow, RefreshCcw, Target, Award, Lock,
  FileSearch, TrendingUp, Gauge, BookCheck, Server, Network, HardDrive
} from 'lucide-react';

export default function Variant2() {
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
        @keyframes marquee-rtl { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee-rtl 40s linear infinite; will-change: transform; }
        .marquee-track:hover { animation-play-state: paused; }

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
            <div className="flex items-center gap-2">
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
                  <span>2026, 범정부 예방점검체계 의무화 시대</span>
                </div>

                <h1 className="mt-8 text-2xl md:text-3xl font-semibold leading-snug fade-up-2" style={{ color: 'var(--navy)', wordBreak: 'keep-all' }}>
                  공공기관 정보시스템 예방점검,<br />
                  이제 <span style={{ color: 'var(--brand)' }}>자동화</span>가 필요합니다.
                </h1>

                <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl fade-up-3" style={{ wordBreak: 'keep-all' }}>
                  행정안전부 예방점검 기준에 맞춘 공공기관 정보시스템 자동 점검 솔루션,
                  <strong className="font-semibold text-slate-900"> 컴플리사이트(ComplySight)</strong>
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3 fade-up-4">
                  <button className="btn-primary px-6 py-3.5 rounded-md text-sm font-medium flex items-center gap-2">
                    도입 상담 <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="btn-ghost px-6 py-3.5 rounded-md text-sm font-medium bg-white flex items-center gap-2 text-slate-700">
                    예방점검 항목 확인 <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-slate-500 fade-up-4">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                    행정안전부 고시 100% 반영
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                    점검기준 및 항목 내장
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                    빠른 도입 및 운영
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

        {/* =========== §2 PROBLEM (now 2nd) =========== */}
        <section className="py-20" style={{ background: 'var(--bg-alt)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2]" style={{ color: 'var(--navy)', wordBreak: 'keep-all' }}>
                <span style={{ color: 'var(--brand)' }}>의무화</span>된 예방점검 체계,<br />
                아직도 <span className="font-serif italic font-normal text-slate-500">수작업</span>으로 관리하고 계신가요?
              </h2>
              <p className="mt-8 text-slate-600 leading-relaxed text-lg">
                흩어진 자료와 반복되는 수작업은 비효율 초래하며,
                결정적인 순간에 리스크로 돌아옵니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: Layers,
                  t: '시스템별 자료 분산',
                  d: '"서버, DB, WAS, 보안장비별 자료가 흩어져 점검 준비에 시간이 소요됩니다."',
                  impact: '담당자 간 인수인계 시 자료 누락 빈번',
                },
                {
                  icon: FileText,
                  t: '수기 점검의 한계',
                  d: '"담당자마다 체크 방식이 달라 결과의 일관성이 떨어집니다."',
                  impact: 'Human Error · 기준 편차 발생',
                },
                {
                  icon: RefreshCcw,
                  t: '반복되는 보고서 작성',
                  d: '"정기보고서(일·월·분기) 및 감사 보고서를 매번 수작업으로 취합합니다."',
                  impact: '본래 기획·개선 업무 집중 불가',
                },
                {
                  icon: FileSearch,
                  t: '이력 추적의 어려움',
                  d: '"언제, 누가, 어떤 기준으로 점검했는지 증빙하기 어렵습니다."',
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

        {/* =========== §1.5 MANDATE OVERVIEW (now 3rd) =========== */}
        <section className="pt-20 pb-16" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="eyebrow mb-3">규제 변화</div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.2]" style={{ color: 'var(--navy)', wordBreak: 'keep-all' }}>
              행정안전부 고시 기준,<br />
              이제 <span style={{ color: 'var(--brand)' }}>자동화 점검</span>이 요구됩니다.
            </h2>

            {/* Left column (3 key changes overlaid on watermark) | Right column (inspection table) */}
            <div className="mt-12 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
              {/* Left: Subtitle paragraph + regulation card */}
              <div>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                  기존 1·2등급 중심의 <strong className="font-bold" style={{ color: 'var(--brand)' }}>예방점검체계 적용 대상</strong>이
                  2026년 4월 13일 시행 고시에 따라
                  <strong className="font-bold" style={{ color: 'var(--brand)' }}> 정보시스템 1·2·3·4등급 전체</strong>로 확대되었습니다.
                </p>

                <div
                  className="mt-8 bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-[0_15px_30px_-15px_rgba(11,31,58,0.18)]"
                  style={{ transform: 'rotate(1.5deg)' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Landmark className="w-4 h-4 shrink-0" style={{ color: 'var(--navy)' }} strokeWidth={1.75} />
                    <div className="text-[11px] font-mono text-slate-500 tracking-wider">
                      행정안전부 고시
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 leading-snug">
                    &lt;행정기관 및 공공기관 정보시스템 안정성 고시&gt;
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    제2장 정보시스템 운영·관리
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-500 mb-3">
                      제12조 (정보시스템 예방점검 체계)
                    </div>
                    <div className="space-y-3 leading-relaxed">
                      <p className="text-[11px] text-slate-500">
                        <span className="font-semibold mr-1">①</span>
                        중앙행정기관등의 장은 별표 5의 기준에 따라 정보시스템의 예방점검 체계와 매뉴얼을 마련하고 이를 준수하여 소관 정보시스템을 관리하여야 한다.
                      </p>
                      <p className="text-[11px] text-slate-500">
                        <span className="font-semibold mr-1">②</span>
                        중앙행정기관등의 장은 제1항에 따른{' '}
                        <span className="text-[15px] md:text-base font-bold text-slate-900 leading-snug">
                          예방점검 수행 시,
                          <strong style={{ color: 'var(--navy)' }}> 수작업으로 인한 누락 및 오류를 방지</strong>하고,
                          점검 결과의 정확성과 신뢰성을 확보하기 위하여
                          <strong style={{ color: 'var(--brand)' }}> 자동화된 점검 도구 또는 시스템을 활용</strong>
                        </span>
                        하도록 노력하여야 한다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Inspection table */}
              <div>
                <div className="text-sm md:text-base font-semibold text-right mb-3" style={{ color: 'var(--navy)' }}>
                  정보시스템 예방점검 3개분야, 8개점검 항목
                </div>
                <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm bg-white border border-slate-200 rounded-lg overflow-hidden shadow-[0_20px_40px_-20px_rgba(11,31,58,0.12)]">
                  <thead>
                    <tr className="text-white" style={{ background: 'var(--navy)' }}>
                      <th rowSpan="2" className="px-2 py-2 text-center text-[11px] font-semibold border-r border-white/10 w-[64px]">분야</th>
                      <th rowSpan="2" className="px-2 py-2 text-center text-[11px] font-semibold border-r border-white/10 w-[68px]">주기</th>
                      <th rowSpan="2" className="px-3 py-2 text-left text-[11px] font-semibold border-r border-white/10">예방점검 항목</th>
                      <th colSpan="4" className="px-2 py-1.5 text-center text-[11px] font-semibold border-b border-white/10">정보시스템 등급</th>
                    </tr>
                    <tr className="text-white" style={{ background: 'var(--navy)' }}>
                      <th className="px-1.5 py-1.5 text-center text-[10px] font-semibold border-r border-white/10 w-10">A1</th>
                      <th className="px-1.5 py-1.5 text-center text-[10px] font-semibold border-r border-white/10 w-10">A2</th>
                      <th className="px-1.5 py-1.5 text-center text-[10px] font-semibold border-r border-white/10 w-10">A3</th>
                      <th className="px-1.5 py-1.5 text-center text-[10px] font-semibold w-10">A4</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { area: '일상점검', areaRow: 3, cycle: '매일', num: '①', name: '상태 점검', desc: 'CPU/메모리/디스크 상태 등 이상 유무 점검', grades: ['필수','필수','필수','필수'] },
                      { cycle: '매일', num: '②', name: '서비스 점검', desc: '메인 화면 접속여부 및 접속시간 점검', grades: ['필수','필수','필수','필수'] },
                      { cycle: '매월', num: '③', name: '유효성 점검', desc: '인증서 유효기간, 도메인 종료일 등 점검', grades: ['필수','필수','필수','필수'] },
                      { area: '특별점검', areaRow: 4, cycle: '매년', num: '④', name: '오프라인 점검', desc: '의도적 시스템 정지·재가동으로 이상유무 점검', grades: ['필수','필수','필수','권고'] },
                      { cycle: '매년', num: '⑤', name: '다중화 점검', desc: '다중화된 장비·부품의 정상 동작 여부 점검', grades: ['필수','필수','필수','권고'] },
                      { cycle: '매년', num: '⑥', name: '성능점검', desc: '부하 테스트 등으로 설정값 최적화 등 성능저하 요인 점검', grades: ['필수','필수','필수','권고'] },
                      { cycle: '특정기간', num: '⑦', name: '업무집중기간 점검', desc: '서비스 집중 기간 중 사용량 증가에 따른 서비스 지연·중지 대비 사전 점검 및 집중 모니터링', grades: ['필수','필수','필수','권고'] },
                      { area: '구조진단', areaRow: 1, cycle: '필요시', num: '⑧', name: '구조진단 및 개선', desc: '하드웨어, 시스템SW, 응용프로그램, 데이터베이스, 네트워크 등 전체 정보시스템 구조에 대한 진단 및 개선점 도출', grades: ['필수','필수','필수','—'] },
                    ].map((r, i) => (
                      <tr key={i} className="border-t border-slate-100">
                        {r.area && (
                          <td rowSpan={r.areaRow} className="px-2 py-2.5 text-center text-[11px] font-semibold text-slate-700 bg-slate-50 border-r border-slate-200">
                            {r.area}
                          </td>
                        )}
                        <td className="px-2 py-2.5 text-center text-[10px] text-slate-600 border-r border-slate-200">{r.cycle}</td>
                        <td className="px-3 py-2.5 text-[12px] text-slate-700 border-r border-slate-200 leading-snug">
                          <span className="font-semibold">{r.num} ({r.name})</span> {r.desc}
                        </td>
                        {r.grades.map((g, gi) => {
                          const isRequired = g === '필수';
                          const isDash = g === '—';
                          return (
                            <td
                              key={gi}
                              className={`px-1.5 py-2.5 text-center text-[10px] font-semibold ${gi < 3 ? 'border-r border-slate-200' : ''}`}
                              style={{
                                color: isRequired ? '#DC2626' : isDash ? '#94A3B8' : '#64748B',
                              }}
                            >
                              {g}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========== §1.7 SCOPE (지원 대상 자원 - marquee) =========== */}
        <section className="pt-8 pb-20" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-sm md:text-base font-semibold tracking-tight" style={{ color: 'var(--navy)' }}>
              지원 대상 자원 및 제품
            </h3>

            {(() => {
              const resources = [
                { label: '서버(OS)', items: ['LIN**', 'AIX', 'Solaris'] },
                { label: 'DBMS', items: ['ORA***', 'MS***', 'CUB***'] },
                { label: '클라우드', items: [] },
                { label: 'WEB', items: ['Apa**', 'Web***'] },
                { label: '네트워크', items: ['CIS**', 'JUNI***'] },
                { label: '스토리지', items: ['DE**', 'HITA***'] },
                { label: 'WAS', items: ['Tom**', 'JE**', 'Jbo**'] },
                { label: '보안', items: ['시큐**', '프****'] },
                { label: '백업', items: ['Comm****', 'Acro***'] },
              ];
              const doubled = [...resources, ...resources];
              return (
                <div
                  className="mt-10 overflow-hidden"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
                    maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
                  }}
                >
                  <div className="marquee-track flex gap-4 w-max">
                    {doubled.map((r, i) => (
                      <div
                        key={i}
                        className="flex-shrink-0 w-56 bg-white border border-slate-200 rounded-xl px-5 py-5 shadow-[0_8px_20px_-12px_rgba(11,31,58,0.15)]"
                      >
                        <div className="text-base font-semibold text-slate-900">
                          {r.label}
                        </div>
                        <div className="mt-2 text-xs font-mono leading-relaxed" style={{ color: 'var(--brand)' }}>
                          {r.items.length > 0 ? r.items.join(', ') : '—'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* =========== §3 SOLUTION (해결 방식) =========== */}
        <section className="py-20" style={{ background: 'var(--bg-alt)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.3]" style={{ color: 'var(--navy)' }}>
                개별·수동 관리에서 <span style={{ color: 'var(--brand)' }}>통합·자동 관리</span>로
              </h2>
              <p className="mt-8 text-slate-600 leading-relaxed text-lg">
                컴플리사이트는 기존의 개별 수작업 중심 점검 방식을 벗어나,<br />
                <strong className="font-semibold text-slate-900">점검 기준 설정부터 리포트 생성까지 전 과정을 자동화</strong>합니다.
              </p>
            </div>

            {/* Before / After Comparison */}
            <div className="max-w-5xl mx-auto">

              {/* BEFORE */}
              <div>
                <div className="mb-4 text-xs font-mono tracking-wider text-slate-400">
                  BEFORE · 개별 관리 · 수동 관리
                </div>
                <div className="flex items-center gap-1.5">
                  {['기준 해석', '수동 점검', '육안 판별', '수기 보고서 작성', '수치 모니터링', '수기 보고', '수동 조치', '이력 추적'].map((t, i, arr) => (
                    <React.Fragment key={i}>
                      <div className="flex-1 min-w-0 px-2 py-2.5 rounded border border-slate-200 bg-white text-center">
                        <div className="text-[11px] text-slate-500 truncate">{t}</div>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="text-slate-300 text-xs shrink-0">›</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Transition divider */}
              <div className="flex items-center justify-center py-10">
                <svg width="24" height="32" viewBox="0 0 24 32" className="text-slate-300">
                  <path d="M12 2 L12 28 M4 20 L12 28 L20 20" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" />
                </svg>
              </div>

              {/* AFTER */}
              <div>
                <div className="mb-4 text-xs font-mono tracking-wider" style={{ color: 'var(--brand)' }}>
                  AFTER · 통합 관리 · 자동 관리
                </div>
                <div className="flex items-stretch gap-2">
                  {[
                    { t: '기준 내재화', icon: BookCheck, auto: true },
                    { t: '데이터 확보', icon: Database, auto: true },
                    { t: '상태 판별', icon: Gauge, auto: true },
                    { t: '리포트 생성', icon: FileCheck, auto: true },
                    { t: '리포트 제출', icon: FileSearch, auto: false },
                    { t: '점검 이력 자동 기록', icon: BookCheck, auto: true },
                  ].map((s, i, arr) => (
                    <React.Fragment key={i}>
                      <div
                        className="flex-1 rounded-lg p-5 flex items-center gap-3"
                        style={{
                          background: s.auto ? 'var(--brand)' : 'white',
                          border: s.auto ? 'none' : '1.5px solid #CBD5E1',
                          color: s.auto ? 'white' : 'inherit',
                        }}
                      >
                        <s.icon className="w-5 h-5 shrink-0" strokeWidth={1.75} style={{ color: s.auto ? 'white' : '#64748B' }} />
                        <div className="min-w-0">
                          <div className={`text-sm font-semibold ${s.auto ? '' : 'text-slate-900'}`}>{s.t}</div>
                          <div className={`text-[10px] font-mono mt-0.5 ${s.auto ? 'opacity-70' : 'text-slate-400'}`}>
                            {s.auto ? 'AUTO' : '담당자'}
                          </div>
                        </div>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="flex items-center text-slate-300 shrink-0 text-sm">›</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* =========== §5 OPERATIONS (운영 구조) =========== */}
        <section className="py-20" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-5xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.25]" style={{ color: 'var(--navy)', wordBreak: 'keep-all' }}>
                점검 기준 입력부터 결과 보고까지,<br />
                흩어진 예방점검 업무를 <span className="font-serif italic font-normal whitespace-nowrap">하나의 프로세스</span>로 통합합니다.
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
        <section className="py-20" style={{ background: 'var(--bg-alt)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mb-12">
              <div className="eyebrow mb-3">제품 구성</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2]" style={{ color: 'var(--navy)', wordBreak: 'keep-all' }}>
                <span style={{ color: 'var(--accent)' }}>Sentinel</span> / <span style={{ color: 'var(--brand)' }}>Manager</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              {/* SENTINEL */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-2.5 py-1 rounded font-mono text-[10px] font-bold tracking-wider text-white" style={{ background: 'var(--accent)' }}>
                    SENTINEL
                  </div>
                  <div className="eyebrow" style={{ marginTop: 0 }}>자동 수집 · 증적 관리</div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-snug" style={{ color: 'var(--navy)', wordBreak: 'keep-all' }}>
                  정보시스템 내 각 자원으로부터<br />점검 데이터를 자동으로 수집
                </h3>

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
              </div>

              {/* MANAGER */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-2.5 py-1 rounded font-mono text-[10px] font-bold tracking-wider text-white" style={{ background: 'var(--brand)' }}>
                    MANAGER
                  </div>
                  <div className="eyebrow" style={{ marginTop: 0 }}>통합 관리 · 대시보드</div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-snug" style={{ color: 'var(--navy)', wordBreak: 'keep-all' }}>
                  점검 기준, 판별 결과, 리포트,<br />점검 이력을 통합 관리
                </h3>

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
              </div>
            </div>
          </div>
        </section>

        {/* =========== §6 EFFECTS (도입 효과) =========== */}
        <section className="py-20" style={{ background: 'var(--navy)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-white" style={{ wordBreak: 'keep-all' }}>
                도입 이후, <span className="font-serif italic font-normal text-slate-400">예방점검 업무</span>는<br />
                체계적으로 운영됩니다.
              </h2>
              <p className="mt-8 text-slate-300 leading-relaxed text-lg max-w-2xl">
                기준은 내재화, 점검은 자동화, 결과는 보고서로!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: RefreshCcw, t: '반복 점검 업무 감소', d: '정기 점검, 결과 취합, 보고서 작성 등 반복적인 예방점검 업무를 자동화합니다.' },
                { icon: Target, t: '점검 기준 일관성 확보', d: '사전에 정의된 점검 기준에 따라 시스템이 동일한 방식으로 점검 결과를 판단합니다.' },
                { icon: Layers, t: '점검 현황 통합 관리', d: '시스템별·자원별 점검 현황과 조치 상태를 하나의 대시보드에서 확인합니다.' },
                { icon: ShieldCheck, t: '감사·사후 대응 용이', d: '점검 결과와 조치 이력이 자동 저장되어 감사·사후 대응 자료로 활용할 수 있습니다.' },
                { icon: BookCheck, t: '예방점검 업무 표준화', d: '담당자가 바뀌어도 동일한 절차와 기준으로 예방점검 업무를 수행할 수 있습니다.' },
                { icon: TrendingUp, t: '본연의 업무 집중', d: '담당자는 반복 점검 업무에서 벗어나, 시스템의 안정적 운영과 개선에 집중합니다.' },
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

        {/* =========== §8 AI ROADMAP =========== */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--bg-alt)' }}>
          {/* Subtle dot pattern background */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(30, 64, 175, 0.08) 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-[11px] font-mono tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--brand)' }}>
              컴플리사이트 AI 확장전략
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.15]" style={{ color: 'var(--navy)', wordBreak: 'keep-all' }}>
              점검 체계화를 넘어 <span className="font-serif italic font-normal" style={{ color: 'var(--brand)' }}>AI 기반 운영 플랫폼</span>으로 진화합니다
            </h2>
            <p className="mt-6 text-lg leading-relaxed max-w-3xl text-slate-600">
              점검 자동화로 데이터를 축적하고 이를 기반으로
              운영 판단을 돕는 <strong className="font-semibold text-slate-900">AI 플랫폼으로 거듭납니다.</strong>
            </p>

            {/* Roadmap label */}
            <div className="mt-14 text-sm font-semibold" style={{ color: 'var(--brand)' }}>
              컴플리사이트 AI 미래비전과 단계별 확장 로드맵
            </div>

            {/* 4-stage roadmap (chevron flow) — desktop */}
            {(() => {
              const stages = [
                {
                  stage: '1단계 — 현재',
                  badgeBg: '#2563EB',
                  title: '예방점검체계 자동화',
                  items: ['점검 결과 및 증적 자동 수집', '점검 보고서 자동 생성'],
                },
                {
                  stage: '2단계 — 2026년',
                  badgeBg: '#1E40AF',
                  title: 'AI 기반 운영 지식화',
                  items: ['자원별 매뉴얼 통합 학습', '운영/장애 내용 질의응답'],
                },
                {
                  stage: '3단계',
                  badgeBg: '#7C3AED',
                  title: 'AI 기반 조치 추천',
                  items: [
                    'GraphRAG 기반 기능 고도화',
                    '장애 상황별 대응 시나리오 추천',
                    '내부 규정 등 다양한 분야까지 AI 에이전트 활용 확대',
                  ],
                },
                {
                  stage: '4단계',
                  badgeBg: '#A855F7',
                  title: 'AI 기반 선제 관리',
                  items: ['장애 징후 조기 탐지', '원인 근거 제공', '선제 점검/조치 장비 Top n 제공'],
                },
              ];
              return (
                <div className="hidden lg:block mt-4">
                  {/* Row 1: chevron flow with stage label + title (glassmorphism, left-aligned) */}
                  <div className="flex items-stretch">
                    {stages.map((s, i, arr) => {
                      const isFirst = i === 0;
                      const isLast = i === arr.length - 1;
                      const clipPath = isFirst
                        ? 'polygon(0 0, calc(100% - 28px) 0, 100% 50%, calc(100% - 28px) 100%, 0 100%)'
                        : isLast
                        ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 28px 50%)'
                        : 'polygon(0 0, calc(100% - 28px) 0, 100% 50%, calc(100% - 28px) 100%, 0 100%, 28px 50%)';
                      const padding = isFirst
                        ? '24px 50px 24px 28px'
                        : isLast
                        ? '24px 28px 24px 56px'
                        : '24px 50px 24px 56px';
                      return (
                        <div key={i} className={`flex-1 ${i > 0 ? '-ml-3' : ''}`}>
                          <div
                            className="h-full flex flex-col justify-center"
                            style={{
                              background: 'rgba(255, 255, 255, 0.85)',
                              backdropFilter: 'blur(14px)',
                              WebkitBackdropFilter: 'blur(14px)',
                              boxShadow: 'inset 0 1px 0 rgba(255,255,255,1), 0 10px 30px -10px rgba(11, 31, 58, 0.15)',
                              clipPath,
                              padding,
                              minHeight: '108px',
                            }}
                          >
                            <div
                              className="text-[11px] font-mono tracking-wider mb-2"
                              style={{ color: s.badgeBg, wordBreak: 'keep-all' }}
                            >
                              {s.stage}
                            </div>
                            <h3 className="text-base md:text-lg font-semibold text-slate-900 leading-snug" style={{ wordBreak: 'keep-all' }}>
                              {s.title}
                            </h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Row 2: items per stage */}
                  <div className="flex mt-8">
                    {stages.map((s, i) => (
                      <div key={i} className="flex-1 px-3">
                        <ul className="space-y-2">
                          {s.items.map((it, ii) => (
                            <li
                              key={ii}
                              className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
                              style={{ wordBreak: 'keep-all' }}
                            >
                              <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: s.badgeBg }} />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* Mobile/tablet fallback — vertical cards */}
            <div className="mt-12 grid md:grid-cols-2 gap-4 lg:hidden">
              {[
                {
                  stage: '1단계 — 현재',
                  badgeBg: '#2563EB',
                  title: '예방점검체계 자동화',
                  items: ['점검 결과 및 증적 자동 수집', '점검 보고서 자동 생성'],
                },
                {
                  stage: '2단계 — 2026년',
                  badgeBg: '#1E40AF',
                  title: 'AI 기반 운영 지식화',
                  items: ['자원별 매뉴얼 통합 학습', '운영/장애 내용 질의응답'],
                },
                {
                  stage: '3단계',
                  badgeBg: '#7C3AED',
                  title: 'AI 기반 조치 추천',
                  items: ['GraphRAG 기반 기능 고도화', '장애 상황별 대응 시나리오 추천', '내부 규정 등 다양한 분야까지 AI 에이전트 활용 확대'],
                },
                {
                  stage: '4단계',
                  badgeBg: '#A855F7',
                  title: 'AI 기반 선제 관리',
                  items: ['장애 징후 조기 탐지', '원인 근거 제공', '선제 점검/조치 장비 Top n 제공'],
                },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-6">
                  <div
                    className="inline-block px-3 py-1 rounded text-[10px] font-bold tracking-wider text-white mb-3"
                    style={{ background: s.badgeBg }}
                  >
                    {s.stage}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-4 leading-snug" style={{ wordBreak: 'keep-all' }}>
                    {s.title}
                  </h3>
                  <ul className="space-y-2">
                    {s.items.map((it, ii) => (
                      <li key={ii} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: s.badgeBg }} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========== §9 CTA =========== */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#050D1A' }}>
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(30, 64, 175, 0.25), transparent 70%)'
          }} />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.2] text-white" style={{ wordBreak: 'keep-all' }}>
              예방점검체계 의무화,<br />
              <span className="font-serif italic font-normal" style={{ color: 'var(--brand-2)' }}>'컴플리사이트'</span>로 준비하세요
            </h2>

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
            <div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: 'var(--navy)' }}>
                  <Circle className="w-3.5 h-3.5 text-white" fill="white" strokeWidth={0} />
                </div>
                <span className="font-semibold tracking-tight text-[17px]" style={{ color: 'var(--navy)' }}>COMPLYSIGHT</span>
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-sm">
                공공기관 정보시스템 예방점검체계 자동화 솔루션
              </p>
              <div className="mt-6 text-xs text-slate-500 font-mono">
                © 2026 Knowwhere Soft. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
