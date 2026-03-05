const botService = {
  // 后端应提供类似 /api/bots 的接口，返回 { code: 0, data: [{ id, name }, ...] }
  getBots: async (): Promise<{ id: string; name: string }[]> => {
    try {
      const resp = await fetch('/api/bots');
      if (!resp.ok) return [];
      const json = await resp.json();
      // 支持后端返回 { code: 0, data: [...] } 或直接数组
      if (Array.isArray(json)) return json;
      return (json && json.data) || [];
    } catch (e) {
      return [];
    }
  },
};

export default botService;
