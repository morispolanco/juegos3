export const generateContent = async (prompt, systemPrompt) => {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, systemPrompt }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to generate content');
    }

    return await response.json();
  } catch (error) {
    console.error('AI Service Error:', error);
    throw error;
  }
};

export const prompts = {
  expedition: (region) => `Genera una nueva expedición arqueológica en la región de ${region}. 
    Incluye:
    - nombre de la expedición (título místico)
    - descripción narrativa (atmósfera de selva, misterio, templos)
    - 3 objetivos principales
    - una leyenda corta relacionada
    - dificultad (1-5)
    Responde en formato JSON.`,
  
  puzzle: (type) => `Genera un acertijo de tipo ${type} inspirado en la civilización maya.
    Si es glifos: genera una serie de glifos con su significado y una frase oculta que el usuario debe descifrar.
    Si es códice: describe una escena de un códice fragmentado con 4 fragmentos descriptivos que el usuario debe ordenar.
    Si es historia: un acertijo basado en hechos arqueológicos de Tikal o El Mirador.
    Incluye la solución y una pista mística.
    Responde en formato JSON.`,
    
  artifact: () => `Genera un artefacto maya ficticio recién descubierto.
    Incluye:
    - nombre
    - material (jade, obsidiana, oro, piedra caliza)
    - era
    - poder o significado espiritual
    - descripción visual detallada.
    Responde en formato JSON.`
};
