import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  ClipboardCheck,
  FileSearch,
  Database,
  FileCheck,
  Workflow,
  ShieldAlert,
  ShieldCheck,
  Shield,
  Download,
  Phone,
  FileText,
  Building2,
} from 'lucide-react';

/* ============================================================
   Survey definition — sourced from
   '우리기관 간편진단_컴플리사이트.docx'
   5 steps × 3 questions = 15 yes/no items
   ============================================================ */
const STEPS = [
  {
    id: 1,
    title: '적용 대상 확인',
    icon: Building2,
    description: '우리 기관의 정보시스템이 예방점검체계 의무 적용 대상인지 점검합니다.',
    questions: [
      '기관에서 직접 운영하거나 위탁 운영 중인 정보시스템이 있습니까?',
      '우리 기관의 정보시스템이 예방점검체계 의무 적용 대상인지 확인하셨습니까?',
      '관리 중인 정보시스템의 등급, 중요도, 담당 부서를 파악하고 있습니까?',
    ],
  },
  {
    id: 2,
    title: '점검수행방식 확인',
    icon: Workflow,
    description: '점검 수행 절차와 담당 체계가 정립돼 있는지 점검합니다.',
    questions: [
      '일상점검, 특별점검, 구조진단을 구분해 관리하고 있습니까?',
      '점검 항목별 수행 주기와 담당자가 정해져 있습니까?',
      '점검 결과를 엑셀·한글·수기 양식이 아닌 전용 시스템으로 관리하고 있습니까?',
    ],
  },
  {
    id: 3,
    title: '증적 관리 수준 확인',
    icon: Database,
    description: '점검 결과 증적과 조치 이력이 체계적으로 보관되는지 점검합니다.',
    questions: [
      '자원 점검 결과가 일자, 담당자, 시스템별로 자동 저장됩니까?',
      '이상 항목 발생 시 조치 이력까지 함께 관리됩니까?',
      '감사나 상급기관 점검 시 바로 제출 가능한 증적 자료가 있습니까?',
    ],
  },
  {
    id: 4,
    title: '보고서 작성 방식 확인',
    icon: FileCheck,
    description: '정기·감사 보고서 산출 체계와 자동화 수준을 점검합니다.',
    questions: [
      '정기 점검 보고서를 시스템에서 자동으로 생성할 수 있습니까?',
      '점검 결과를 기관 제출용 표준 보고서 양식으로 출력할 수 있습니까?',
      '여러 자원의 점검 보고서를 별도 취합 없이 한 번에 출력할 수 있습니까?',
    ],
  },
  {
    id: 5,
    title: '자동화·누락 관리 확인',
    icon: ShieldCheck,
    description: '미점검·이상 항목 자동 감지 및 인수인계 체계를 점검합니다.',
    questions: [
      '미점검, 지연 점검, 이상 항목을 자동으로 확인할 수 있습니까?',
      '담당자 변경 시에도 기존 점검 결과와 조치 이력을 쉽게 확인할 수 있습니까?',
      '기관 전체 정보시스템의 점검 현황을 한 화면에서 볼 수 있습니까?',
    ],
  },
];

const TOTAL_QUESTIONS = STEPS.reduce((n, s) => n + s.questions.length, 0);

const TIERS = [
  {
    grade: 'A',
    label: '대응 필요',
    icon: ShieldAlert,
    accent: '#DC2626',
    accentBg: 'rgba(220, 38, 38, 0.08)',
    accentBorder: 'rgba(220, 38, 38, 0.18)',
    check: (no) => no >= 8,
    headline: '예방점검체계 대응 보완이 시급합니다.',
    message:
      '우리 기관은 예방점검체계 대응을 위한 관리 체계 보완이 시급한 상태입니다. 점검 수행, 증적 관리, 보고서 작성, 누락 관리가 분산되어 있을 가능성이 높아 제도와 감사 대응에 부담이 발생할 수 있습니다.',
    cta: '예방점검체계 의무화 대응, 컴플리사이트로 준비해보세요',
  },
  {
    grade: 'B',
    label: '보완 필요',
    icon: FileSearch,
    accent: '#D97706',
    accentBg: 'rgba(217, 119, 6, 0.08)',
    accentBorder: 'rgba(217, 119, 6, 0.18)',
    check: (no) => no >= 4 && no <= 7,
    headline: '관리 체계 보완이 필요합니다.',
    message:
      '우리 기관은 일부 예방점검 관리 체계를 갖추고 있으나, 증적 관리·보고서 작성·누락 관리 측면에서 보완이 필요합니다. 현재의 수작업 중심 관리 방식은 담당자 변경, 감사 대응, 정기 보고 시 업무 부담으로 이어질 수 있습니다.',
    cta: '컴플리사이트로 점검 결과 관리와 보고서 작성을 자동화해보세요',
  },
  {
    grade: 'C',
    label: '관리 양호',
    icon: ShieldCheck,
    accent: '#059669',
    accentBg: 'rgba(5, 150, 105, 0.08)',
    accentBorder: 'rgba(5, 150, 105, 0.18)',
    check: (no) => no <= 3,
    headline: '기본 관리 체계가 잘 갖춰져 있습니다.',
    message:
      '우리 기관은 기본적인 예방점검 관리 체계를 갖추고 있습니다. 현재 관리 수준을 유지하면서 반복 업무를 줄이고 점검 이력과 보고 자료를 더 편리하게 관리할 수 있는 방안을 검토해볼 수 있습니다.',
    cta: '컴플리사이트로 예방점검 업무를 더 편리하게 관리해보세요',
  },
];

function resolveTier(noCount) {
  return TIERS.find((t) => t.check(noCount)) || TIERS[TIERS.length - 1];
}

function flatIndex(stepIdx, qIdx) {
  let i = 0;
  for (let s = 0; s < stepIdx; s++) i += STEPS[s].questions.length;
  return i + qIdx;
}

export default function Diagnostic({ onClose }) {
  // phase: 0 = start, 1..STEPS.length = step screens, STEPS.length+1 = result
  const [phase, setPhase] = useState(0);
  const [answers, setAnswers] = useState(() => new Array(TOTAL_QUESTIONS).fill(null));

  const noCount = useMemo(() => answers.filter((a) => a === false).length, [answers]);
  const answeredCount = useMemo(() => answers.filter((a) => a !== null).length, [answers]);

  const isStartPhase = phase === 0;
  const isResultPhase = phase === STEPS.length + 1;
  const isStepPhase = !isStartPhase && !isResultPhase;
  const currentStepIdx = isStepPhase ? phase - 1 : -1;
  const currentStep = currentStepIdx >= 0 ? STEPS[currentStepIdx] : null;

  const currentStepAnswers = isStepPhase
    ? currentStep.questions.map((_, qIdx) => answers[flatIndex(currentStepIdx, qIdx)])
    : [];
  const currentStepComplete = currentStepAnswers.every((a) => a !== null);

  const tier = isResultPhase ? resolveTier(noCount) : null;

  // Modal body scroll-to-top on phase change
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [phase]);

  const setAnswer = (qIdx, value) => {
    const flat = flatIndex(currentStepIdx, qIdx);
    setAnswers((prev) => {
      const next = prev.slice();
      next[flat] = value;
      return next;
    });
  };

  const goNext = () => {
    if (isStartPhase) { setPhase(1); return; }
    if (isStepPhase) {
      if (!currentStepComplete) return;
      setPhase((p) => p + 1);
    }
  };

  const goBack = () => {
    if (phase > 0) setPhase((p) => p - 1);
  };

  const resetAll = () => {
    setAnswers(new Array(TOTAL_QUESTIONS).fill(null));
    setPhase(0);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="우리기관 간편 진단"
      onMouseDown={handleBackdropClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'rgba(11, 31, 58, 0.55)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(12px, 3vw, 32px)',
        animation: 'diagBackdropIn 0.18s ease-out',
      }}
    >
      <style>{`
        @keyframes diagBackdropIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes diagPanelIn { from { opacity: 0; transform: translateY(16px) scale(0.985); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes diagFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .diag-panel { animation: diagPanelIn 0.24s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .diag-fade { animation: diagFade 0.28s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .diag-choice { transition: all 0.16s ease; cursor: pointer; }
        .diag-choice:hover { transform: translateY(-1px); }
        .diag-scroll::-webkit-scrollbar { width: 10px; }
        .diag-scroll::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 999px; border: 2px solid #FFFFFF; }
        .diag-scroll::-webkit-scrollbar-thumb:hover { background: #94A3B8; }
      `}</style>

      <div
        className="diag-panel"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '720px',
          maxHeight: 'min(92vh, 920px)',
          background: '#FFFFFF',
          borderRadius: '20px',
          boxShadow: '0 40px 100px -20px rgba(11, 31, 58, 0.45), 0 12px 30px -10px rgba(11, 31, 58, 0.25)',
          fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif",
          color: '#0F172A',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px',
            borderBottom: '1px solid #E2E8F0',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(8px)',
            zIndex: 5,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 24, height: 24, borderRadius: 6, background: '#0B1F3A',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <ClipboardCheck size={13} color="#FFFFFF" strokeWidth={2.2} />
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#0B1F3A', letterSpacing: '0.02em' }}>
              우리기관 간편 진단
            </div>
            {!isStartPhase && (
              <div style={{ fontSize: 11, fontFamily: 'JetBrains Mono, monospace', color: '#64748B', marginLeft: 8 }}>
                {isResultPhase ? '결과' : `Step ${currentStep?.id} / ${STEPS.length}`}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            style={{
              width: 32, height: 32, borderRadius: 8, border: 'none',
              background: 'transparent', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: '#64748B', transition: 'background 0.15s ease, color 0.15s ease',
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = '#F1F5F9'; e.currentTarget.style.color = '#0F172A'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#64748B'; }}
          >
            <X size={18} strokeWidth={2.2} />
          </button>
        </div>

        {/* Body */}
        <div
          ref={scrollRef}
          className="diag-scroll"
          style={{
            overflowY: 'auto',
            padding: '24px clamp(20px, 4vw, 36px) 28px',
            flex: 1,
          }}
        >
          {/* ===== START ===== */}
          {isStartPhase && (
            <div className="diag-fade">
              <div
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '6px 12px', borderRadius: 999,
                  background: '#FFFFFF', border: '1px solid #E2E8F0',
                  fontSize: 11, color: '#475569',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: 999, background: '#059669' }} />
                예방점검체계 대응 수준 체크
              </div>

              <h1
                style={{
                  marginTop: 16, fontSize: 28, fontWeight: 600, lineHeight: 1.25,
                  color: '#0B1F3A', wordBreak: 'keep-all', letterSpacing: '-0.01em',
                }}
              >
                우리 기관의<br />
                <span style={{ color: '#1E40AF' }}>예방점검체계 대응 수준</span>을<br />
                3분 만에 확인해보세요.
              </h1>

              <p style={{ marginTop: 16, color: '#475569', lineHeight: 1.65, wordBreak: 'keep-all', fontSize: 14 }}>
                우리 기관의 정보시스템 예방점검체계 대응 수준을 확인할 수 있는 진단 메뉴입니다.
                간단한 진단을 통해 우리 기관의 예방점검 관리 현황을 확인해보세요.
              </p>

              <div
                style={{
                  marginTop: 24, padding: 20, borderRadius: 14,
                  background: '#F8FAFC', border: '1px solid #E2E8F0',
                }}
              >
                <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: '#94A3B8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  진단 구성
                </div>
                <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 8 }}>
                  {STEPS.map((s) => (
                    <div key={s.id} style={{ padding: 12, borderRadius: 10, background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span
                          style={{
                            fontFamily: 'JetBrains Mono, monospace', fontSize: 9, fontWeight: 700, letterSpacing: '0.08em',
                            padding: '2px 6px', borderRadius: 4, color: '#FFFFFF', background: '#0B1F3A',
                          }}
                        >
                          {String(s.id).padStart(2, '0')}
                        </span>
                        <s.icon size={13} color="#0B1F3A" strokeWidth={1.75} />
                      </div>
                      <div style={{ marginTop: 6, fontSize: 12, fontWeight: 600, color: '#0F172A', lineHeight: 1.4 }}>{s.title}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 14, fontSize: 11, color: '#64748B' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    <ClipboardCheck size={12} /> 5단계 · 15문항
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ width: 3, height: 3, borderRadius: 999, background: '#94A3B8' }} /> 예 / 아니오 선택
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ width: 3, height: 3, borderRadius: 999, background: '#94A3B8' }} /> 약 3분 소요
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ===== STEPS ===== */}
          {isStepPhase && currentStep && (
            <div className="diag-fade">
              {/* progress */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: '#94A3B8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Step {currentStep.id} / {STEPS.length}
                </div>
                <div style={{ fontSize: 11, color: '#64748B' }}>{answeredCount} / {TOTAL_QUESTIONS} 답변</div>
              </div>
              <div style={{ height: 4, background: '#E2E8F0', borderRadius: 999, overflow: 'hidden', marginBottom: 20 }}>
                <div style={{ height: '100%', width: `${(answeredCount / TOTAL_QUESTIONS) * 100}%`, background: '#1E40AF', transition: 'width 0.25s ease' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(30, 64, 175, 0.08)', flexShrink: 0,
                  }}
                >
                  <currentStep.icon size={18} color="#1E40AF" strokeWidth={1.75} />
                </div>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 600, color: '#0B1F3A', lineHeight: 1.25, letterSpacing: '-0.01em' }}>{currentStep.title}</h2>
                  <p style={{ marginTop: 6, fontSize: 13, color: '#64748B', lineHeight: 1.55, wordBreak: 'keep-all' }}>{currentStep.description}</p>
                </div>
              </div>

              {/* questions */}
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {currentStep.questions.map((q, qIdx) => {
                  const value = currentStepAnswers[qIdx];
                  return (
                    <div key={qIdx} style={{ padding: 18, background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
                        <span
                          style={{
                            fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 700, letterSpacing: '0.06em',
                            padding: '3px 7px', borderRadius: 4, color: '#FFFFFF', background: '#0B1F3A',
                            flexShrink: 0, marginTop: 2,
                          }}
                        >
                          Q{currentStep.id}.{qIdx + 1}
                        </span>
                        <div style={{ fontSize: 14.5, fontWeight: 600, color: '#0F172A', lineHeight: 1.55, wordBreak: 'keep-all' }}>{q}</div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                        <button
                          type="button"
                          className="diag-choice"
                          onClick={() => setAnswer(qIdx, true)}
                          style={{
                            padding: '11px 14px', borderRadius: 10,
                            border: `1px solid ${value === true ? '#1E40AF' : '#E2E8F0'}`,
                            background: value === true ? 'rgba(30, 64, 175, 0.08)' : '#FFFFFF',
                            color: value === true ? '#1E40AF' : '#334155',
                            fontSize: 13, fontWeight: 600,
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                          }}
                        >
                          <Check size={15} strokeWidth={2.5} /> 예
                        </button>
                        <button
                          type="button"
                          className="diag-choice"
                          onClick={() => setAnswer(qIdx, false)}
                          style={{
                            padding: '11px 14px', borderRadius: 10,
                            border: `1px solid ${value === false ? '#DC2626' : '#E2E8F0'}`,
                            background: value === false ? 'rgba(220, 38, 38, 0.06)' : '#FFFFFF',
                            color: value === false ? '#DC2626' : '#334155',
                            fontSize: 13, fontWeight: 600,
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                          }}
                        >
                          <X size={15} strokeWidth={2.5} /> 아니오
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ===== RESULT ===== */}
          {isResultPhase && tier && (
            <div className="diag-fade">
              <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: '#94A3B8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
                진단 결과
              </div>

              <div
                style={{
                  borderRadius: 16, padding: 22, border: `1px solid ${tier.accentBorder}`, background: tier.accentBg,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: 12, background: '#FFFFFF',
                      border: `1px solid ${tier.accentBorder}`,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <tier.icon size={22} color={tier.accent} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                      <span style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: '#64748B', letterSpacing: '0.12em' }}>GRADE</span>
                      <span style={{ fontSize: 22, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', color: tier.accent }}>{tier.grade}</span>
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: '#0B1F3A', letterSpacing: '-0.01em' }}>{tier.label}</div>
                  </div>
                </div>

                <h2 style={{ marginTop: 8, fontSize: 22, fontWeight: 600, color: '#0B1F3A', lineHeight: 1.3, wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>
                  {tier.headline}
                </h2>

                <p style={{ marginTop: 14, fontSize: 13.5, color: '#334155', lineHeight: 1.7, wordBreak: 'keep-all' }}>
                  {tier.message}
                </p>
              </div>

              {/* CTA card */}
              <div style={{ marginTop: 16, padding: 22, borderRadius: 14, background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: '#94A3B8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
                  Next Step
                </div>
                <div style={{ fontSize: 18, fontWeight: 600, color: '#0B1F3A', lineHeight: 1.35, letterSpacing: '-0.01em', wordBreak: 'keep-all' }}>
                  {tier.cta}
                </div>
                <p style={{ marginTop: 10, fontSize: 13, color: '#475569', lineHeight: 1.65, wordBreak: 'keep-all' }}>
                  컴플리사이트는 정보시스템 예방점검체계 대응을 위해 점검 수행, 증적 관리, 보고서 생성, 누락 관리를
                  하나의 체계로 지원하는 예방점검 자동화 솔루션입니다.
                </p>

                <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 8 }}>
                  <ProductBtn icon={Shield} label="제품 상세 페이지" primary onClick={onClose} />
                  <ProductBtn icon={Download} label="제품자료 다운로드" />
                  <ProductBtn icon={FileText} label="조달 등록 안내" />
                  <ProductBtn icon={Phone} label="제품 상담" highlight />
                </div>
              </div>

              <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <button
                  type="button"
                  onClick={resetAll}
                  style={{
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    fontSize: 12, color: '#64748B', textUnderlineOffset: 2,
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  다시 진단하기
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    fontSize: 12, color: '#64748B',
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  <ArrowLeft size={12} /> 닫기
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer (only for start/step phases — result has its own buttons) */}
        {!isResultPhase && (
          <div
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
              padding: '14px 24px', borderTop: '1px solid #E2E8F0', background: '#FFFFFF',
            }}
          >
            {isStartPhase ? (
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: '10px 16px', borderRadius: 8, border: '1px solid #E2E8F0',
                  background: '#FFFFFF', color: '#475569',
                  fontSize: 13, fontWeight: 500, cursor: 'pointer',
                }}
              >
                나중에
              </button>
            ) : (
              <button
                type="button"
                onClick={goBack}
                style={{
                  padding: '10px 16px', borderRadius: 8, border: '1px solid #E2E8F0',
                  background: '#FFFFFF', color: '#475569',
                  fontSize: 13, fontWeight: 500, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}
              >
                <ArrowLeft size={14} /> 이전
              </button>
            )}
            <button
              type="button"
              onClick={goNext}
              disabled={isStepPhase && !currentStepComplete}
              style={{
                padding: '11px 22px', borderRadius: 8, border: 'none', color: '#FFFFFF',
                background: isStepPhase && !currentStepComplete ? '#CBD5E1' : '#0B1F3A',
                fontSize: 13, fontWeight: 600,
                cursor: isStepPhase && !currentStepComplete ? 'not-allowed' : 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 6,
                transition: 'background 0.15s ease',
              }}
              onMouseOver={(e) => { if (!(isStepPhase && !currentStepComplete)) e.currentTarget.style.background = '#15294A'; }}
              onMouseOut={(e) => { if (!(isStepPhase && !currentStepComplete)) e.currentTarget.style.background = '#0B1F3A'; }}
            >
              {isStartPhase
                ? '간편 진단 시작하기'
                : currentStepIdx === STEPS.length - 1
                  ? '진단 결과 보기'
                  : '다음 단계'}
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductBtn({ icon: Icon, label, primary, highlight, onClick }) {
  const base = {
    padding: '11px 14px', borderRadius: 10,
    fontSize: 13, fontWeight: 600, cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
    transition: 'background 0.15s ease, border-color 0.15s ease',
  };
  if (primary) {
    return (
      <button
        type="button"
        onClick={onClick}
        style={{ ...base, background: '#0B1F3A', color: '#FFFFFF', border: 'none' }}
        onMouseOver={(e) => (e.currentTarget.style.background = '#15294A')}
        onMouseOut={(e) => (e.currentTarget.style.background = '#0B1F3A')}
      >
        <Icon size={14} strokeWidth={2} /> {label}
      </button>
    );
  }
  if (highlight) {
    return (
      <button
        type="button"
        onClick={onClick}
        style={{ ...base, background: '#1E40AF', color: '#FFFFFF', border: 'none' }}
        onMouseOver={(e) => (e.currentTarget.style.background = '#1E3A8A')}
        onMouseOut={(e) => (e.currentTarget.style.background = '#1E40AF')}
      >
        <Icon size={14} strokeWidth={2} /> {label}
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ ...base, background: '#FFFFFF', color: '#475569', border: '1px solid #E2E8F0' }}
      onMouseOver={(e) => (e.currentTarget.style.borderColor = '#94A3B8')}
      onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E2E8F0')}
    >
      <Icon size={14} strokeWidth={2} /> {label}
    </button>
  );
}
